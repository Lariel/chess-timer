import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurarJogoComponent } from './components/configurar-jogo/configurar-jogo.component';
import { JogoComponent } from './components/jogo/jogo.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'novo-jogo',
    pathMatch: 'full',
  },
  {
    path: 'novo-jogo',
    component: ConfigurarJogoComponent
  },
  {
    path: 'jogo',
    component: JogoComponent
  },
  {
    path: '**',
    redirectTo: 'novo-jogo',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
