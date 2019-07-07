import { Component, OnInit } from '@angular/core';
import { Recovery } from '../classes';
import { RecoveriesService } from '../recoveries.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  recoveries: Recovery[];
  getRecoveries(): void {
    this.recoveriesService.getRecoveries()
      .subscribe( recoveries => this.recoveries = recoveries);

  }

  constructor(
    private recoveriesService: RecoveriesService,
  ) { }

  ngOnInit() {
    this.getRecoveries();
  }

}
