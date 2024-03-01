import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabella1Component } from './componenti/tabella1/tabella1.component';
import { VisualizzaComponent } from './componenti/visualizza/visualizza.component';
import { LoginComponent } from './componenti/login/login.component';
import { VisualizzaSoloComponent } from './componenti/visualizza-solo/visualizza-solo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tabella1', component: Tabella1Component },
  { path: 'visualizza', component: VisualizzaComponent },
  { path: 'visualizzaSolo', component: VisualizzaSoloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
