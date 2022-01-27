import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStepComponent } from './preview-step.component';

describe('PreviewStepComponent', () => {
  let component: PreviewStepComponent;
  let fixture: ComponentFixture<PreviewStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
