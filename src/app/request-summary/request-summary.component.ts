import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import { Request, Recovery } from '../classes';
import { RecoveriesService } from '../recoveries.service';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-request-summary',
  templateUrl: './request-summary.component.html',
  styleUrls: ['./request-summary.component.css']
})

export class RequestSummaryComponent implements OnInit {
  request: Request;
  recoveries: Recovery[];
  newRequests: Request[];
  requestId = +this.route.snapshot.paramMap.get('reqId');
  userId = parseInt(localStorage.getItem('userId'), 10);

  getRequest(): void {
    this
    .requestService.getRequest(this.requestId)
    .subscribe( request => this.request = request);
  }

  getRecoveries(): void {
    this
    .recoveriesService.getRecoveriesByRequest(this.requestId)
    .subscribe( recoveries => this.recoveries = recoveries);
  }

  confirmRequest(): void {
    this
    .requestService.confirmRequest(this.requestId, this.userId)
    .subscribe();
    this.router.navigateByUrl('/dashboard');
  }

  constructor(
    private recoveriesService: RecoveriesService,
    private requestService: RequestsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getRequest();
    this.getRecoveries();
  }
}
