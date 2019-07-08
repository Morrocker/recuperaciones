import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RequestsService } from '../requests.service';

const MOT = [
  'robo',
  'virus',
  'respaldo'
];

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})

export class RequestFormComponent implements OnInit {
  motivos;
  machines;
  id = 1;
  requestForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      street: ['', Validators.required],
      sNumber: ['', Validators.required],
      other: ['', Validators.required],
      motive: [''],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required]
  });

  onSubmit(): void {
    this
    .requestService
    .sendTempRequest(this.requestForm)
    .subscribe( newRequestId => this.id = newRequestId );

    this
    // .router.navigateByUrl(`/request/list/${this.requestId}`);
    .router.navigateByUrl(`request/list`);
  }

  // clearForm(): void {
  //   this.requestForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     city: ['', Validators.required],
  //     region: ['', Validators.required],
  //     street: ['', Validators.required],
  //     sNumber: ['', Validators.required],
  //     other: ['', Validators.required],
  //     motive: [''],
  //     fromTime: ['', Validators.required],
  //     toTime: ['', Validators.required]
  //   });
  // }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private requestService: RequestsService
  ) {
  }

  ngOnInit() {
    this.motivos = MOT;
  }


}
