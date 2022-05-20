import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { ActivatedRoute, Router, RouteConfigLoadEnd } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/shared/models';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa! : Pessoa;
  novoUsuario: boolean = true;
  usuario: Usuario = new Usuario();
  id!: string;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    //snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    //Operador + (antes do this) converter para número
    //buscar também ppor, name, email, role, status, created at, update at, deliveries made
    this.id = this.route.snapshot.params['id'];
    this.novoUsuario = !this.id;
    //Com o id, obtem a pessoa
    this.usuarioService.buscarPorId(+this.id).subscribe(usuario => {
      this.usuario = usuario;
      this.usuario.password = "";
    });
  }

  salvar(): void {
    if(this.formPessoa.form.valid) {
      if(this.novoUsuario) {
        this.usuarioService.inserir(this.usuario).subscribe(usuario=>{
          this.router.navigate(["/usuarios"]);
        })
      }
    }
  }
}
