import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRequestsListComponent } from './current-requests-list.component';

describe('CurrentRequestsListComponent', () => {
  let component: CurrentRequestsListComponent;
  let fixture: ComponentFixture<CurrentRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
