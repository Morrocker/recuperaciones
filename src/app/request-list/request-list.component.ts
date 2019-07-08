import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

import { NewRecovery } from '../classes';
import { FormsService } from '../forms.service';
import { Recovery } from '../classes';
import { RecoveriesService } from '../recoveries.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {
  users: string[] = [];
  machines: string[] = [];
  disks: string[] = [];
  recoveries: NewRecovery[] = [];
  localUserId = localStorage.getItem('userId');
  formData = new NewRecovery();
  id = +this.route.snapshot.paramMap.get('id');

  model = {
    left: true,
    middle: false,
    right: false
  };

  recoveryForm = this.formBuilder.group({
    user: '',
    machine: '',
    disk: '',
    deleted: '',
    date: '',
  });


  // getRecoveries(): void {
  //   this
  //   .recoveriesService.getRecoveries()
  //   .subscribe( recoveries => this.recoveries = recoveries);
  // }
  //
  addRecovery() {
    this.formData = this.recoveryForm.value;
    this.recoveries
      .push( this.formData );
    this.clearForm();
  }

  clearForm() {
    this.recoveryForm = this.formBuilder.group({
      name: '',
      machine: '',
      disk: '',
      deleted: '',
      recoveryDate: '',
    });
  }

  removeRecovery(recovery: NewRecovery) {
    this.recoveries = this.recoveries.filter( r => r !== recovery);
  }

  getUsers() {
    this
      .formsService.getUsers(parseInt(this.localUserId, 10))
      .subscribe( users => this.users = users );
  }

  getMachines(userId: string) {
    if (userId !== '') {
      this
        .formsService.getMachines(userId)
        .subscribe( machines => this.machines = machines);
      this
        .disks = [];
    }
  }

  getDisks(machineName: string) {
    if (machineName !== '') {
      this
        .formsService.getMachines(machineName)
        .subscribe( disks => this.disks );
    }
  }

  onChanges() {
    this.recoveryForm.valueChanges
      .subscribe(val => {
      this.getMachines(val.name);
      this.getDisks(val.machine);
    });
  }

  open(content) {
    this
      .modalService
      .open(content, {size: 'lg', windowClass: 'dark-modal'});
  }

  sendRecoveries() {
    this
      .recoveriesService
      .addNewRecoveries(this.recoveries, this.id)
      .subscribe();
    this
      .router.navigateByUrl(`request/summary/${this.id}`);
  }

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService,
    private modalService: NgbModal,
    private recoveriesService: RecoveriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.onChanges();
  }

}
