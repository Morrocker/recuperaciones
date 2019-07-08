import { Component, OnInit } from '@angular/core';
import { Recovery } from '../classes';
import { RecoveriesService } from '../recoveries.service';
import { FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NewRecovery } from '../classes';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {
  users;
  machines;
  disks;
  closeResult: string;
  localUserId = localStorage.getItem('userId');
  formData = new NewRecovery();

  model = {
    left: true,
    middle: false,
    right: false
  };

  recoveryForm = this.formBuilder.group({
    name: '',
    machine: '',
    disk: '',
    deleted: '',
    recoveryDate: '',
  });

  recoveries: Recovery[];
  getRecoveries(): void {
    this.recoveriesService.getRecoveries()
      .subscribe( recoveries => this.recoveries = recoveries);

  }
  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'dark-modal'});
  }

  getUsers() {
    this.users = this.formsService.getUsers(parseInt(this.localUserId, 10)).subscribe();
  }

  getMachines(userId: string) {
  }

  getDisks(machineName: string) {
  }

  onChanges() {
    this.recoveryForm.valueChanges.subscribe(val => {
      this.getMachines(val.name);
      this.getDisks(val.machine);
    });
  }

  constructor(
    private recoveriesService: RecoveriesService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private formsService: FormsService,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.onChanges();
    this.machines = MACHINES;
    this.disks = DISK;
    this.getRecoveries();
  }

}
