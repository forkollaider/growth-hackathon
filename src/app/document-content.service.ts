import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Injectable({
  providedIn: 'root'
})
export class DocumentContentService {

  constructor() { }

  formattedData: any[] = [];

  DATA: AOA = [[],[]];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'dummy.xlsx';

  getData(): AOA[][] {
    return this.DATA;
  }

	setData(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const ab: ArrayBuffer = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(ab);

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			this.DATA = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      this.DATA = this.DATA.filter((row: any[]) => row.length > 0);

      return this.DATA
		};
		reader.readAsArrayBuffer(target.files[0]);
	}

	setFormattedData(formattedData: any[]) {
    this.formattedData = formattedData;
    console.log(this.formattedData);
  }

  getFormatData() {
    return this.formattedData;
  }
}
