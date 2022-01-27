import {Component, OnInit} from '@angular/core';
import {NEXT_STEP, PREVIOUS_STEP, STEPS} from "./constants/common.constants";
import {Observable, of} from "rxjs";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly STEPS = STEPS;
  private readonly NEXT_STEP = NEXT_STEP;
  private readonly PREVIOUS_STEP = PREVIOUS_STEP;
  public activeStep$: Observable<STEPS> = of(this.STEPS.UPLOAD);

  ngOnInit(): void {
  }

  handleNextStep(): void {
    this.activeStep$.pipe(tap((activeStep: STEPS) => {
      this.activeStep$ = of(this.NEXT_STEP[activeStep] as STEPS);
      console.log('here');
    }, take(1))).subscribe();
  }

  handleBackStep(): void {
    this.activeStep$.pipe(tap((activeStep: STEPS) => {
      this.activeStep$ = of(this.PREVIOUS_STEP[activeStep] as STEPS);
    }))
  }
}
