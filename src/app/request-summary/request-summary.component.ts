import { Component, OnInit, Input } from '@angular/core';
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

  getRequest(n: number): void {
    this.requestService.getRequest(n)
    .subscribe( request => this.request = request);
  }

  getRecoveries(): void {
    this.recoveriesService.getRecoveries()
      .subscribe( recoveries => this.recoveries = recoveries);
  }

  constructor(
    private recoveriesService: RecoveriesService,
    private requestService: RequestsService,
  ) { }

  ngOnInit() {
    this.getRequest(2);
    this.getRecoveries();

  }

}
