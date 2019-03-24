import { TestBed } from '@angular/core/testing';

import { DeepCleansingStripsService } from './deep-cleansing-strips.service';

describe('DeepCleansingStripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeepCleansingStripsService = TestBed.get(DeepCleansingStripsService);
    expect(service).toBeTruthy();
  });
});
