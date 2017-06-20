import { TestBed, inject } from '@angular/core/testing';
import { RopaService } from './ropa.service';

describe('RopaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RopaService]
    });
  });

  it('should be created', inject([RopaService], (service: RopaService) => {
    expect(service).toBeTruthy();
  }));
});
