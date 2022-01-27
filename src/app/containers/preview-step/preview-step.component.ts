import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-preview-step',
  templateUrl: './preview-step.component.html',
  styleUrls: ['./preview-step.component.scss']
})
export class PreviewStepComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
