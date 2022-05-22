import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../shared/services/usuario.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';



@NgModule({
  declarations: [
    ShowAllUsersComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
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
export class PessoaModule { }
