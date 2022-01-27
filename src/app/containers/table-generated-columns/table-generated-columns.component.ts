import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  age: number;
  surname?: string;
  gender?: string;
  email?: string;
  password?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', age: 1.0079, surname: 'H',  },
  { id: 2, name: 'Helium', age: 4.0026, surname: 'He' },
  { id: 3, name: 'Lithium', age: 6.941, surname: 'Li' },
  { id: 4, name: 'Beryllium', age: 9.0122, surname: 'Be' },
  { id: 5, name: 'Boron', age: 10.811, surname: 'B' },
  { id: 6, name: 'Carbon', age: 12.0107, surname: 'C' },
  { id: 7, name: 'Nitrogen', age: 14.0067, surname: 'N' },
  { id: 8, name: 'Oxygen', age: 15.9994, surname: 'O' },
  { id: 9, name: 'Fluorine', age: 18.9984, surname: 'F' },
  { id: 10, name: 'Neon', age: 20.1797, surname: 'Ne' },
];

@Component({
  selector: 'app-table-generated-columns',
  templateUrl: './table-generated-columns.component.html',
  styleUrls: ['./table-generated-columns.component.scss'],
})
export class TableGeneratedColumnsComponent implements OnInit {
  @Input() columns: any[];
  @Input() dataSource: Record<string, any>[];
  @Input() isHeaderOnTop = true;

  public displayedColumns: any[];
  private readonly noDataSign = '-';

  constructor() {}

  ngOnInit(): void {
    this.columns = [
      // {
      //   columnDef: 'id',
      //   header: 'No.',
      //   cell: (element: PeriodicElement) => `${element.id}`,
      // },
      {
        columnDef: 'name',
        header: 'Name',
        cell: (element: PeriodicElement) => `${element.name || this.noDataSign }`,
      },
      {
        columnDef: 'age',
        header: 'age',
        cell: (element: PeriodicElement) => `${element.age || this.noDataSign }`,
      },
      {
        columnDef: 'surname',
        header: 'surname',
        cell: (element: PeriodicElement) => `${element.surname || this.noDataSign }`,
      },
      {
        columnDef: 'gender',
        header: 'gender',
        cell: (element: PeriodicElement) => `${element.gender || this.noDataSign }`,
      },
      {
        columnDef: 'password',
        header: 'password',
        cell: (element: PeriodicElement) => `${element.password || this.noDataSign }`,
      },
      {
        columnDef: 'email',
        header: 'email',
        cell: (element: PeriodicElement) => `${element.email || this.noDataSign }`,
      },
    ];
    this.dataSource = ELEMENT_DATA;
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }
}
