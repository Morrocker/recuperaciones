import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryDetailsComponent } from './recovery-details.component';

describe('RecoveryDetailsComponent', () => {
  let component: RecoveryDetailsComponent;
  let fixture: ComponentFixture<RecoveryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
