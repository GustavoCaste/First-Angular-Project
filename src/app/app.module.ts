import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { RouterModule, Routes } from '@angular/router';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';

const routes: Routes = [
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: '',
   redirectTo: 'listarPensamento',
   pathMatch: 'full'
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
