import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path: '', redirectTo: '/formulaire', pathMatch: 'full' },
  { path: 'formulaire', component: FormulaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
