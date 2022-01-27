import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './containers/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      height: '800px',
      panelClass: 'dialog-container'
    });
  }

}
