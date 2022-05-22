import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { CollaboratorRoutes } from './collaborator/collaborator-routing-module';
import { ShowAllUsersComponent } from './collaborator/show-all-users/show-all-users.component';
import { EditCollaboratorComponent } from './collaborator/edit-collaborator/edit-collaborator.component';
import { RegisterCollaboratorComponent } from './collaborator/register-collaborator/register-collaborator.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'collaborator', redirectTo: 'collaborator/table' },
  { path: 'collaborator/table', component: ShowAllUsersComponent },
  { path: 'collaborator/new', component: RegisterCollaboratorComponent },
  { path: 'collaborator/edit/:id', component: EditCollaboratorComponent },
  { path: 'home', component: HomeComponent },
  ...LoginRoutes,
  ...CollaboratorRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

