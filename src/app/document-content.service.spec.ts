import { TestBed } from '@angular/core/testing';

import { DocumentContentService } from './document-content.service';

describe('DocumentContentService', () => {
  let service: DocumentContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
