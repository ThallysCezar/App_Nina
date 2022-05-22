import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../shared/services/usuario.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditCollaboratorComponent } from './edit-collaborator/edit-collaborator.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { RegisterCollaboratorComponent } from './register-collaborator/register-collaborator.component';



@NgModule({
  declarations: [
    ShowAllUsersComponent,
    RegisterCollaboratorComponent,
    EditCollaboratorComponent,
    ModalUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ]
})
export class CollaboratorModule { }
