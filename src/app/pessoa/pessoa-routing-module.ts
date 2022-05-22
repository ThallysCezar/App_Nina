import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';

export const PessoaRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pessoas', redirectTo: 'pessoas/listar' },
  { path: 'pessoas/listar', component: ShowAllUsersComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:id', component: EditarPessoaComponent },
  { path: 'home', component: HomeComponent }
];
