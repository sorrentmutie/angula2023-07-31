import { TestBed } from '@angular/core/testing';

import { ThirdGuard } from './third.guard';

describe('ThirdGuard', () => {
  let guard: ThirdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ThirdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
