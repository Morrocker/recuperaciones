import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Request, Recovery } from '../classes';
import { RecoveriesService } from '../recoveries.service';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  request: Request;
  recoveries: Recovery[];
  // numnum: number;

  getRequest(): void {
    const id = +this.route.snapshot.paramMap.get('request.id');
    this.requestService.getRequest(id)
    .subscribe( request => this.request = request);
  }

  getRecoveries(): void {
    this.recoveriesService.getRecoveries()
      .subscribe( recoveries => this.recoveries = recoveries);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private requestService: RequestsService,
    private recoveriesService: RecoveriesService,
  ) { }

  ngOnInit() {
    this.getRequest();
    this.getRecoveries();
  }

}
