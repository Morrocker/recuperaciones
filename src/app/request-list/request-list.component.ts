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
  users;
  machines: string[] = [];
  disks: string[] = [];
  recoveries: NewRecovery[] = [];
  localUserId = parseInt(localStorage.getItem('userId'), 10);
  formData = new NewRecovery();
  requestId = +this.route.snapshot.paramMap.get('reqId');

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
      .formsService.getUsers(this.localUserId)
      .subscribe( users => this.users = users );
  }

  getMachines(user) {
    if (user !== '') {
      this
        .formsService.getMachines(user.id)
        .subscribe( singleuser => this.machines = singleuser.equipos);
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
      .subscribe(() => {
        this.getMachines(
          this.users.filter(obj => {
            return obj.correo === this.recoveryForm.get('name').value;
          }
          )
        );
        // this.getDisks(val.machine);
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
      .addNewRecoveries(this.recoveries, this.requestId)
      .subscribe();
    this
      .router.navigateByUrl(`request/summary/${this.requestId}`);
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
