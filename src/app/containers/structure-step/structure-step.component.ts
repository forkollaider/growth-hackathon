import { Component, OnInit } from '@angular/core';
import {EXPECTED_SCHEMA} from "../../constants/common.constants";
import {FormBuilder} from "@angular/forms";

enum Mode {
  ROW,
  COLUMN,
}

@Component({
  selector: 'app-structure-step',
  templateUrl: './structure-step.component.html',
  styleUrls: ['./structure-step.component.scss']
})
export class StructureStepComponent implements OnInit {
  public readonly expectedSchema = EXPECTED_SCHEMA;
  public selectOptions: (string | number)[] = [];
  public documentContent: any[][] = [
    ['First Name', 'Last Name', 'Age', 'Sex', 'Pass', 'Email', 'Not needed'],
    ['sdfgsdfg', 'last_name', 23, 'male', '123', 'sdfsf.ln@dsfds.com', 'Not needed'],
    ['Apache', 'Helicopter', 50, 'Apache helicopter', 'bum bum bum', 'gook_destroy@unclesam.com', 'Not needed'],
    ['One', 'Two', 42, 'female', '329329dwj', 'one_two@smth.com', 'Not needed'],
  ];
  public mode: Mode = Mode.ROW;
  public readonly MODES = Mode;
  // public form: FormGroup;

  constructor(formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.selectOptions = this.documentContent[0];

    // this.form = this.formBuilder.group({
    //
    // })
  }

  handleModeChange({value}: {value: Mode}): void {
    this.mode = +value;
    this.selectOptions = this.mode === this.MODES.ROW ? this.documentContent[0] : this.transpose(this.documentContent)[0];
  }

  transpose(matrix: any[][]) {
    if (matrix.some(row => row.length !== matrix[0].length)) {
      return [];
    }
    const longestRow: any = matrix.reduce((acc:any,row:  any, index: any) => {
      if (index === 1){
        return acc
      }
      if (row.length > acc.length){
        return row
      }
      return index
    });
    const longestSide = longestRow > matrix.length - 1 ? longestRow : matrix.length - 1;

    return matrix[longestSide].map((row, rowIndex) => matrix.map(row => row[rowIndex]));
  }

  submitStructure() {

  }

}
