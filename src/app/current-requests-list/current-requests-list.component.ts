import { Component, OnInit } from '@angular/core';

import { Request } from '../classes';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-current-requests-list',
  templateUrl: './current-requests-list.component.html',
  styleUrls: ['./current-requests-list.component.css']
})

export class CurrentRequestsListComponent implements OnInit {
  requests: Request[];

  getRequests(): void {
    this
      .requestsService
      .getRequestsByUser( parseInt(localStorage.getItem('userId'), 10) )
      .subscribe( requests => this.requests = requests );
  }

  constructor(
  private requestsService: RequestsService
  ) { }

  ngOnInit() {
    localStorage.setItem('userId', '1');
    this.getRequests();
  }
}
