import { Component, OnInit } from '@angular/core';
import {EXPECTED_SCHEMA} from "../../constants/common.constants";

@Component({
  selector: 'app-structure-step',
  templateUrl: './structure-step.component.html',
  styleUrls: ['./structure-step.component.scss']
})
export class StructureStepComponent implements OnInit {
  public readonly expectedSchema = EXPECTED_SCHEMA;

  constructor() { }

  ngOnInit(): void {
  }

}
