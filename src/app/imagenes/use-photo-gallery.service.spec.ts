import { TestBed } from '@angular/core/testing';

import { UsePhotoGalleryService } from './use-photo-gallery.service';

describe('UsePhotoGalleryService', () => {
  let service: UsePhotoGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsePhotoGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
