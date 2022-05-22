import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa! : Pessoa;
  newUser: boolean = true;
  user: User = new User();
  id!: string;


  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //cria uma instância vazia, para não dar erro de referência
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.newUser = !this.id;

  }
    //Inserir:
    // - Verificar se o formulário é válido, se não deu nenhum erro
    // - Se Ok
    //Chama o inserir do Service, this.pessoa está preenchida(binding)
    //Redireciona para /pessoas

 salvarInserir(): void {
        this.usuarioService.inserir(this.user).subscribe(user => {
        this.router.navigate(["/pessoas"]);
        })
    }
  }
