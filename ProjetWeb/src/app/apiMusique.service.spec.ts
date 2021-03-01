/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiMusiqueService } from './apiMusique.service';

describe('Service: ApiMusique', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiMusiqueService]
    });
  });

  it('should ...', inject([ApiMusiqueService], (service: ApiMusiqueService) => {
    expect(service).toBeTruthy();
  }));
});
