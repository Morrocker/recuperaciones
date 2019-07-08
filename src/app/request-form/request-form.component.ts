import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  requestId;
  userId = +this.route.snapshot.paramMap.get('id');
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
    .sendTempRequest(this.requestForm, this.userId)
    .subscribe( newRequestId => this.requestId = newRequestId );

    this
    // .router.navigateByUrl(`/request/list/${this.requestId}`);
    .router.navigateByUrl(`request/list/${this.requestId}`);
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
    private route: ActivatedRoute,
    private requestService: RequestsService
  ) {
  }

  ngOnInit() {
    this.motivos = MOT;
  }


}
