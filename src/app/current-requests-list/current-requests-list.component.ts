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
  foo: string;
  loginState: string;

  getRequests(): void {
    // this.requests = this.requestService.getRequests();
    this
      .requestService
      .getRequestsByUser( parseInt(localStorage.getItem('userId'), 10) )
      .subscribe( requests => this.requests = requests );
  }

  constructor(
  private requestService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }
}
