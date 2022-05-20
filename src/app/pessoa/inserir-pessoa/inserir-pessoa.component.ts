import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model'; 
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa! : Pessoa;
  novaPessoa: boolean = true;
  id!: string;


  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //cria uma instância vazia, para não dar erro de referência
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['id'];
    this.novaPessoa = !this.id;

  }
    //Inserir:
    // - Verificar se o formulário é válido, se não deu nenhum erro
    // - Se Ok
    //Chama o inserir do Service, this.pessoa está preenchida(binding)
    //Redireciona para /pessoas
    inserir(): void{
      if (this.formPessoa.form.valid) {
        this.usuarioService.inserir(this.pessoa);
        this.router.navigate(["/pessoas"]);
    
    }
  }

}
