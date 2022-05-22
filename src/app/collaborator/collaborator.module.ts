import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../shared/services/user.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditCollaboratorComponent } from './edit-collaborator/edit-collaborator.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { RegisterCollaboratorComponent } from './register-collaborator/register-collaborator.component';
import { UserModalComponent } from './user-modal/user-modal.component';



@NgModule({
  declarations: [
    ShowAllUsersComponent,
    RegisterCollaboratorComponent,
    EditCollaboratorComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class CollaboratorModule { }
