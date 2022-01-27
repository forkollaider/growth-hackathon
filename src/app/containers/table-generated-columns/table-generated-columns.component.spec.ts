import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGeneratedColumnsComponent } from './table-generated-columns.component';

describe('TableGeneratedColumnsComponent', () => {
  let component: TableGeneratedColumnsComponent;
  let fixture: ComponentFixture<TableGeneratedColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGeneratedColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGeneratedColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
