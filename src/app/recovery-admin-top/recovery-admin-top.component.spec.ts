import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryAdminTopComponent } from './recovery-admin-top.component';

describe('RecoveryAdminTopComponent', () => {
  let component: RecoveryAdminTopComponent;
  let fixture: ComponentFixture<RecoveryAdminTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryAdminTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryAdminTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
