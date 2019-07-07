import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
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
  id = +this.route.snapshot.paramMap.get('id');
  // numnum: number;

  getRequest(): void {
    this.requestService.getRequest(this.id)
    .subscribe( request => this.request = request);
  }

  getRecoveries(): void {
    this.recoveriesService.getRecoveriesByRequest(this.id)
      .subscribe( recoveries => this.recoveries = recoveries);
  }

  startRequest(): void {
    this.requestService.startRequest(this.id).subscribe();
    this.router.navigateByUrl('/dashboard');
  }

  cancelRequest(): void {
    this.requestService.cancelRequest(this.id).subscribe();
    this.router.navigateByUrl('/dashboard');
  }

  cancelRecovery(recoveryId: number, recovery: Recovery): void {
    this.recoveriesService.cancelRecovery(this.id).subscribe();
    this.recoveries = this.recoveries.filter( r => r !== recovery);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private requestService: RequestsService,
    private recoveriesService: RecoveriesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getRequest();
    this.getRecoveries();
  }

}
