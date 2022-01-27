import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DocumentContentService } from 'src/app/document-content.service';
import {EXPECTED_SCHEMA} from "../../constants/common.constants";

type AOA = any[][];

@Component({
  selector: 'app-upload-step',
  templateUrl: './upload-step.component.html',
  styleUrls: ['./upload-step.component.scss']
})

export class UploadStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  public readonly expectedSchema = EXPECTED_SCHEMA;

  public fileName: string;

  constructor(private documentContentService: DocumentContentService) { }

  data: AOA[][] = [[]];

  ngOnInit(): void {
  }

	onFileChange(evt: any) {
		this.documentContentService.setData(evt)
    this.fileName = evt.target.files[0].name;
	}

	submitNext() {
    this.next.emit();
  }
}
