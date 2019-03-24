import { TestBed } from '@angular/core/testing';

import { NasalStripsService } from './nasal-strips.service';

describe('NasalStripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasalStripsService = TestBed.get(NasalStripsService);
    expect(service).toBeTruthy();
  });
});
