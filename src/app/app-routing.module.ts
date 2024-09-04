import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {OktaCallbackComponent} from "@okta/okta-angular";
import {authGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent, canActivate: [authGuard] },
  { path: 'login/callback', component: OktaCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
