import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentContentService } from 'src/app/document-content.service';

export interface ITableItem {
  name: string;
  id: number;
  age: number;
  surname?: string;
  gender?: string;
  email?: string;
  password?: string;
}


@Component({
  selector: 'app-table-generated-columns',
  templateUrl: './table-generated-columns.component.html',
  styleUrls: ['./table-generated-columns.component.scss'],
})
export class TableGeneratedColumnsComponent implements OnInit {
  @Input() columns: any[];
  @Input() isHeaderOnTop = true;
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  public data: ITableItem[];
  public displayedColumns: any[];
  private readonly noDataSign = '-';
  // private readonly amountOfProps = 6;

  constructor(private documentContentService: DocumentContentService) {}

  ngOnInit(): void {
    this.data= this.documentContentService.getFormatData();

    this.initColumns();
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

private initColumns(): void {
  this.columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ITableItem) => `${element.name || this.noDataSign }`,
    },
    {
      columnDef: 'age',
      header: 'age',
      cell: (element: ITableItem) => `${element.age || this.noDataSign }`,
    },
    {
      columnDef: 'surname',
      header: 'surname',
      cell: (element: ITableItem) => `${element.surname || this.noDataSign }`,
    },
    {
      columnDef: 'gender',
      header: 'gender',
      cell: (element: ITableItem) => `${element.gender || this.noDataSign }`,
    },
    {
      columnDef: 'password',
      header: 'password',
      cell: (element: ITableItem) => `${element.password || this.noDataSign }`,
    },
    {
      columnDef: 'email',
      header: 'email',
      cell: (element: ITableItem) => `${element.email || this.noDataSign }`,
    },
  ];
}


}
