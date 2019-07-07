import { TestBed } from '@angular/core/testing';

import { RecoveriesService } from './recoveries.service';

describe('RecoveriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecoveriesService = TestBed.get(RecoveriesService);
    expect(service).toBeTruthy();
  });
});
