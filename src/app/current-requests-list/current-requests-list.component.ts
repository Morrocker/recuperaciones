import { Component, OnInit } from '@angular/core';

import { Request } from '../classes';
import { RecoveriesService } from '../recoveries.service';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-current-requests-list',
  templateUrl: './current-requests-list.component.html',
  styleUrls: ['./current-requests-list.component.css']
})

export class CurrentRequestsListComponent implements OnInit {
  recoveries: any[];
  requests: any[];
  userId = parseInt(localStorage.getItem('userId'), 10);

  // getRequests(): void {
  //   this
  //     .requestsService
  //     .getRequestsByUser( this.userId )
  //     .subscribe( requests => this.requests = requests );
  // }

  getRecoveries(): void {
    this.recoveriesService.getRecoveries().subscribe( r => this.recoveries = r );
    this.requests = [];
    console.log(this.recoveries);
  }

  getRequests(): void {
    this.requestsService.getRequests2().subscribe( r => this.requests = r );
    this.recoveries = [];
    console.log(this.requests);
  }

  constructor(
  private recoveriesService: RecoveriesService,
  private requestsService: RequestsService
  ) { }

  ngOnInit() {
    // localStorage.setItem('userId', '1');
    // this.getRequests();
  }
}
