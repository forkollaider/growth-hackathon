import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureStepComponent } from './structure-step.component';

describe('StructureStepComponent', () => {
  let component: StructureStepComponent;
  let fixture: ComponentFixture<StructureStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
