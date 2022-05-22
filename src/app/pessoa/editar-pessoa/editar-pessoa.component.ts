import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouteConfigLoadEnd } from '@angular/router';
import { User } from 'src/app/shared/models';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  newUser: boolean = true;
  user: User = new User();
  id!: string;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
    //snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    //Operador + (antes do this) converter para número
    //buscar também ppor, name, email, role, status, created at, update at, deliveries made
    this.id = this.route.snapshot.params['id'];
    this.newUser = !this.id;
    //Com o id, obtem a pessoa
    this.usuarioService.buscarPorId(+this.id).subscribe(user => {
      this.user = user;
      this.user.password = "";
    });
  }

  salvarEditar(): void {
        this.usuarioService.alterar(this.user).subscribe(user => {
        this.router.navigate(["/pessoas"]);
        })
      }
  }
