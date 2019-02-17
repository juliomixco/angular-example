import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { metaData } from 'app/modules/hero/hero.meta.spec';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(metaData);
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
