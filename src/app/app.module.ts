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
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    UploadStepComponent,
    StructureStepComponent,
    PreviewStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    ScrollingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
