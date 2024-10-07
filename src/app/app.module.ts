import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialFeatures } from './material/material.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppRoutingModule } from './app-routing.module';
import OktaAuth from '@okta/okta-auth-js';
import { OktaAuthModule } from '@okta/okta-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { SimpleDataSource } from './model/simple-datasource';
import { provideHttpClient } from '@angular/common/http';

const oktaAuth = new OktaAuth({
  issuer: 'https://cuma.okta.com/oauth2/aus38e911jvrUbFhn4x7',
  clientId: '0oam37b31i1MlMnzu4x7',
  redirectUri: 'http://localhost:4200/login/callback',
});

@NgModule({
  declarations: [AppComponent, FormulaireComponent, HomeComponent],
  imports: [
    BrowserModule,
    MaterialFeatures,
    AppRoutingModule,
    OktaAuthModule.forRoot({ oktaAuth }),
    IonicModule.forRoot({}),
  ],
  providers: [provideAnimationsAsync(), SimpleDataSource, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
