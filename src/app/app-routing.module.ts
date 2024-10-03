import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {OktaCallbackComponent} from "@okta/okta-angular";
import {authGuard} from "./auth/auth.guard";
import {HomeComponent} from "./home/home.component";
import {RessourcesComponent} from "./ressources/ressources.component";
import {InfosComponent} from "./infos/infos.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulaire', component: FormulaireComponent},//, canActivate: [authGuard] },
  { path: 'ressources', component: RessourcesComponent},
  { path: 'infos', component: InfosComponent},
  { path: 'login/callback', component: OktaCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
