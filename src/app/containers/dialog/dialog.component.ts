import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NEXT_STEP, PREVIOUS_STEP, STEPS} from "../../constants/common.constants";
import {Observable, of} from "rxjs";
import {take, tap} from "rxjs/operators";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})

export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}


  public readonly STEPS = STEPS;
  private readonly NEXT_STEP = NEXT_STEP;
  private readonly PREVIOUS_STEP = PREVIOUS_STEP;
  public activeStep$: Observable<STEPS> = of(this.STEPS.UPLOAD);

  ngOnInit(): void {
  }

  handleNextStep(): void {
    this.activeStep$.pipe(tap((activeStep: STEPS) => {
      this.activeStep$ = of(this.NEXT_STEP[activeStep] as STEPS);
    }, take(1))).subscribe();
  }

  handleBackStep(): void {
    this.activeStep$.pipe(tap((activeStep: STEPS) => {
      this.activeStep$ = of(this.PREVIOUS_STEP[activeStep] as STEPS);
    }, take(1))).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}