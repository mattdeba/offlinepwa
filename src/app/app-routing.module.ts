import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { InfosComponent } from './infos/infos.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulaire', component: FormulaireComponent }, //, canActivate: [authGuard] },
  { path: 'ressources', component: RessourcesComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login/callback', component: OktaCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
