import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EXPECTED_SCHEMA} from "../../constants/common.constants";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DocumentContentService} from "../../document-content.service";

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
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
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
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, private documentContentService: DocumentContentService) {
    this.form = this.formBuilder.group(this.expectedSchema.reduce((acc: any, fieldConfig) => {
      acc[fieldConfig.field] = new FormControl('');
      return acc;
    }, {}))
  }

  ngOnInit(): void {
    this.documentContent = this.documentContentService.getData();
    this.selectOptions = this.documentContent[0];
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
    const header = this.selectOptions,
     documentContent = this.mode === this.MODES.ROW ? this.documentContent : this.transpose(this.documentContent),
    mapping = Object.entries(this.form.getRawValue()).map(([name, mapped]: any) => ({field: name, index: header.findIndex(e => e === mapped)}));

    documentContent.shift();

    console.log(mapping);

    if(!documentContent) return;

    console.log(documentContent);

    const output = documentContent.map(row => {
      return mapping.reduce((formatted:any, field) => {
        formatted[field.field] = row[field.index];
        return formatted
      }, {})

      }
    );

    this.documentContentService.setFormattedData(output);

    this.next.emit();
  }

  handleBack() {
    this.back.emit();
  }

}
