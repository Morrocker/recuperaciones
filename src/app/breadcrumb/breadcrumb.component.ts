import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveProgress, DoneProgress, DisabledProgress } from '../breadcrumb-states';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  progressFormat = [
  ActiveProgress,
    ActiveProgress,
    DisabledProgress,
  ];
  icon = [];
  light = {
    'md-light': true,
  };
  dark = {
    'md-dark': true,
  };

  url;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  this.activatedRoute.url.subscribe(activeUrl => {
          this.url = window.location.pathname;
        });
  }

  ngOnInit() {
    switch (this.url) {
      case '/request/base':
        this.progressFormat = [
          ActiveProgress,
          DisabledProgress,
          DisabledProgress,
        ];
        this.icon = [ this.light, this.dark, this.dark ];

        break;
      case '/request/list':
        this.progressFormat = [
          DoneProgress,
          ActiveProgress,
          DisabledProgress,
        ];
        this.icon = [ this.light, this.light, this.dark ];
        break;
      case '/request/summary':
        this.progressFormat = [
          DoneProgress,
          DoneProgress,
          ActiveProgress,
        ];
        this.icon = [ this.light, this.light, this.light ];
        break;
    }
  }
}
