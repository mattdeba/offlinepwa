import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialFeatures } from './material/material.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppRoutingModule } from './app-routing.module';
import { Model } from './model/repository.model';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    MaterialFeatures,
    AppRoutingModule
  ],
  providers: [Model],
  bootstrap: [AppComponent]
})
export class AppModule { }
