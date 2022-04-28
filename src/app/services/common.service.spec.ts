/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';

describe('Service: Common', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService]
    });
  });

  it('should ...', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});
