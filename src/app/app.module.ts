import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentRequestsListComponent } from './current-requests-list/current-requests-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestSummaryComponent } from './request-summary/request-summary.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoginComponent } from './login/login.component';
import { RequestListItemComponent } from './request-list-item/request-list-item.component';
import { RecoveryDetailsComponent } from './recovery-details/recovery-details.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { GoBackComponent } from './go-back/go-back.component';
import { RecoveryAdminTopComponent } from './recovery-admin-top/recovery-admin-top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardComponent,
    CurrentRequestsListComponent,
    PaginationComponent,
    RequestFormComponent,
    RequestListComponent,
    RequestSummaryComponent,
    RecoveryFormComponent,
    BreadcrumbComponent,
    LoginComponent,
    RequestListItemComponent,
    RecoveryDetailsComponent,
    RequestDetailsComponent,
    GoBackComponent,
    RecoveryAdminTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'request/base', component: RequestFormComponent, canActivate: [AuthGuard]  },
      { path: 'request/list', component: RequestListComponent, canActivate: [AuthGuard]  },
      { path: 'request/summary', component: RequestSummaryComponent, canActivate: [AuthGuard]  },
      { path: 'login', component: LoginComponent },
      { path: 'recovery/:id', component: RecoveryDetailsComponent, canActivate: [AuthGuard]  },
      { path: 'request/:id', component: RequestDetailsComponent, canActivate: [AuthGuard]  },
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
