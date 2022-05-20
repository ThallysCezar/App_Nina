import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../shared/services/usuario.service';
import { Pessoa } from '../../shared/models/pessoa.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.usuarios = [];
    this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    this.usuarioService.listarTodos()
      .subscribe((data: Pessoa[]) => {
          if (data == null) {
            this.usuarios = [];
          } else {
            this.usuarios = data;
          }
        }
      );

      return this.usuarios;


      //Pessoa(id, name, email, role, status, createdAt, updatedAt, deliveryMade, deliveriesInProgress)
      //new Pessoa(1, "Lucas", "lucas@email.com", "driver", "active", "2022-02-15", "2022-03-15", 30, 16),
      //new Pessoa(2, "Marta", "Marta@email.com", "deliverer", "vacation", "2022-01-18", "2022-02-21", 3, 12),
      //new Pessoa(3, "Guilherme", "Guilherme@email.com", "manager", "inactive", "2022-02-28", "2022-05-03", 20, 6),
      //new Pessoa(4, "Felipe", "Felipe@email.com", "adm", "active", "2021-11-20", "2022-02-01", 15, 25),
  }

  remover($event: any, usuario: Usuario):  void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${usuario.name}`)){
      this.usuarioService.remover(usuario.id!).subscribe({
        complete: () => {
          this.listarTodos();
        }
      });
    }
  }

  abrirModalPessoa(usuario: Usuario){
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
  }
}
