import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadStepComponent } from './containers/upload-step/upload-step.component';
import { StructureStepComponent } from './containers/structure-step/structure-step.component';
import { PreviewStepComponent } from './containers/preview-step/preview-step.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UploadStepComponent,
    StructureStepComponent,
    PreviewStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
