import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';

export const PessoaRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ListarPessoaComponent, 
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
  }},
  { path: 'pessoas/novo', component: InserirPessoaComponent, 
  canActivate: [AuthGuard],
  data: {
    role: 'ADMIN'
  }},
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },
  { path: 'home', component: HomeComponent, 
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN, GERENTE, FUNC'
  }}
];
