import { TestBed } from '@angular/core/testing';

import { ServicioImgService } from './servicio-img.service';

describe('ServicioImgService', () => {
  let service: ServicioImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
