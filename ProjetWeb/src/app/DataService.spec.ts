import { TestBed } from '@angular/core/testing';
import { DataService } from './DataService';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DataService] });
    service = TestBed.inject(DataService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`noindex has default value`, () => {
    expect(service.noindex).toEqual(0);
  });
});
