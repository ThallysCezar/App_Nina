import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-register-collaborator',
  templateUrl: './register-collaborator.component.html',
  styleUrls: ['./register-collaborator.component.css']
})
export class RegisterCollaboratorComponent implements OnInit {
  @ViewChild('formUser') formUser! : NgForm;
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

 salvarInserir(): void {
        this.usuarioService.inserir(this.user).subscribe(user => {
        this.router.navigate(["/collaborator"]);
        })
    }
  }
