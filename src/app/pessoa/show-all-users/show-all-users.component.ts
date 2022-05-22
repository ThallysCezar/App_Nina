import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/models';

import { Pessoa } from '../../shared/models/pessoa.model';
import { UsuarioService } from '../../shared/services/usuario.service';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {

  user: User[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.user = [];
    this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    this.usuarioService.listarTodos()
      .subscribe((data: Pessoa[]) => {
          if (data == null) {
            this.user = [];
          } else {
            this.user = data;
          }
        }
      );

      return this.user;
  }

  remover($event: any, user: User):  void {
    $event.preventDefault();
    if (confirm(`Do you really want to remove this employee ${user.name}`)){
      this.usuarioService.remover(user.id!).subscribe({
        complete: () => {
          this.listarTodos();
        }
      });
    }
  }

  abrirModalPessoa(user: User){
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.user = user;
  }
}
