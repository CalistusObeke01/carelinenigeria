import { TestBed } from '@angular/core/testing';

import { HaircareService } from './haircare.service';

describe('HaircareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HaircareService = TestBed.get(HaircareService);
    expect(service).toBeTruthy();
  });
});
