import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialFeatures } from './material/material.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppRoutingModule } from './app-routing.module';
import { Model } from './model/repository.model';
import OktaAuth from '@okta/okta-auth-js';
import { OktaAuthModule } from '@okta/okta-angular';

const oktaAuth = new OktaAuth({
  issuer: 'https://cuma.okta.com/oauth2/aus38e911jvrUbFhn4x7',
  clientId: '0oam37b31i1MlMnzu4x7',
  redirectUri: 'https://tfour.mycuma.fr/login/callback',
});

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
  ],
  imports: [
    BrowserModule,
    MaterialFeatures,
    AppRoutingModule,
    OktaAuthModule.forRoot({ oktaAuth }),
  ],
  providers: [Model],
  bootstrap: [AppComponent]
})
export class AppModule { }
