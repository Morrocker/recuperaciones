import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

import { NewRecovery } from '../classes';
import { FormsService } from '../forms.service';
import { Recovery, FullRecovery } from '../classes';
import { RecoveriesService } from '../recoveries.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {

  // users = [{
  //   id: 0,
  //   correo: 'A',
  //   equipos: [{
  //     id: 0,
  //     nombre: 'AA'
  //   }, {
  //     id: 1,
  //     nombre: 'AB'
  //   }]
  // }, {
  //   id: 1,
  //   correo: 'B',
  //   equipos: [{
  //     id: 2,
  //     nombre: 'BA'
  //   }, {
  //     id: 3,
  //     nombre: 'BB'
  //   }]
  // }];

  users;
  machines;
  recoveryData: FullRecovery;
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
    this.recoveryData.fechaRespaldo = this.formData.date;
    this.recoveryData.eliminado = this.formData.deleted;
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

  getMachines() {
    console.log('getMachines andando');
    console.log(this.recoveryForm.value);
    console.log(this.users);
    console.log(this.recoveryForm.get('user').value);
    if (this.recoveryForm.get('user').value !== '') {
    const singleU = this.users.filter(singleUser => singleUser.correo === this.recoveryForm.get('user').value )[0];
    this.machines = singleU.equipos;
    // if (user !== '') {
    //   this
    //     .formsService.getMachines(user.id)
    //     .subscribe( singleuser => this.machines = singleuser.equipos);
    //   this
    //     .disks = [];
    // }
    }
  }

  getDisks(machineName: string) {
    // if (machineName !== '') {
    //   this
    //     .formsService.getMachines(machineName)
    //     .subscribe( disks => this.disks );
    // }
  }

  onChanges() {
    this.recoveryForm.valueChanges
      .subscribe(() => {
        console.log('funciona onChanges');
        this.getMachines();
        }
        // this.getDisks(val.machine);
      );
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
