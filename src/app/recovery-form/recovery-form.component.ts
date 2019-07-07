import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecoveriesService } from '../recoveries.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const USERS = [
  'user1@empresa1',
  'user2@empresaB',
  'user3@empresaC',
  'userC@empresaH'
];

const MACHINES = [
  'machineA',
  'machineB',
  'machine20',
];

const DISK = [
  'c',
  'd',
  '/'
];

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.css'],
})


export class RecoveryFormComponent implements OnInit {
  users;
  machines;
  disks;
  recoveryForm;
  closeResult: string;
    model = {
    left: true,
    middle: false,
    right: false
  };



  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.recoveryForm = this.formBuilder.group({
      name: '',
      machine: '',
      disk: '',
      deleted: '',
      recoveryDate: '',
    });
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'dark-modal'});
  }

  ngOnInit() {
    this.users = USERS;
    this.machines = MACHINES;
    this.disks = DISK;
  }

}
