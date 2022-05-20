import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../shared/services/usuario.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';



@NgModule({
  declarations: [
    ListarPessoaComponent,
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
