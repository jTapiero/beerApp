import { TestBed } from '@angular/core/testing';

import { BeerListHandlerService } from '../beer-list-handler.service';

describe('BeerListHandlerService', () => {
  let service: BeerListHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerListHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
