import { Component, OnInit } from '@angular/core';
import { DocumentContentService } from 'src/app/document-content.service';

type AOA = any[][];

@Component({
  selector: 'app-upload-step',
  templateUrl: './upload-step.component.html',
  styleUrls: ['./upload-step.component.scss']
})

export class UploadStepComponent implements OnInit {

  constructor(private documentContentService: DocumentContentService) { }

  data: AOA[][] = [[]];

  ngOnInit(): void {
  }

	onFileChange(evt: any) {
		this.documentContentService.setData(evt)
	}
}
