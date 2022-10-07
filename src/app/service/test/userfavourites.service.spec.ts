import { TestBed } from '@angular/core/testing';

import { UserfavouritesService } from './userfavourites.service';

describe('UserfavouritesService', () => {
  let service: UserfavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
