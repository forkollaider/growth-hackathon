import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadStepComponent } from './containers/upload-step/upload-step.component';
import { StructureStepComponent } from './containers/structure-step/structure-step.component';
import { PreviewStepComponent } from './containers/preview-step/preview-step.component';
import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from "@angular/material/select";
import { ScrollingModule } from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TableGeneratedColumnsComponent } from './containers/table-generated-columns/table-generated-columns.component';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from "@angular/material/radio";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UploadStepComponent,
    StructureStepComponent,
    PreviewStepComponent,
    TableGeneratedColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ScrollingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
