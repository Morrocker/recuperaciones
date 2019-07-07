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
  id = +this.route.snapshot.paramMap.get('id');

  getRequest(n: number): void {
    this.requestService.getRequest(n)
    .subscribe( request => this.request = request);
  }

  getRecoveries(): void {
    this.recoveriesService.getRecoveriesByRequest(this.id)
      .subscribe( recoveries => this.recoveries = recoveries);
  }

  sendFullRequest(): void {
    this.requestService.sendFullRequest(this.request, this.recoveries).subscribe();
    this.router.navigateByUrl('/dashboard');
  }

  constructor(
    private recoveriesService: RecoveriesService,
    private requestService: RequestsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getRequest(2);
    this.getRecoveries();

  }

}
