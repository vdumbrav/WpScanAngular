import { TestBed, inject } from '@angular/core/testing';

import { WpvulndbService } from './wpvulndb.service';

describe('WpvulndbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpvulndbService]
    });
  });

  it('should ...', inject([WpvulndbService], (service: WpvulndbService) => {
    expect(service).toBeTruthy();
  }));
});
