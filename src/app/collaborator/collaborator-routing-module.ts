import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from '../home/home.component';
import { EditCollaboratorComponent } from './edit-collaborator/edit-collaborator.component';
import { RegisterCollaboratorComponent } from './register-collaborator/register-collaborator.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';

export const CollaboratorRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'collaborator', redirectTo: 'collaborator/table' },
  { path: 'collaborator/table', component: ShowAllUsersComponent },
  { path: 'collaborator/new', component: RegisterCollaboratorComponent },
  { path: 'collaborator/edit/:id', component: EditCollaboratorComponent },
  { path: 'home', component: HomeComponent }
];
