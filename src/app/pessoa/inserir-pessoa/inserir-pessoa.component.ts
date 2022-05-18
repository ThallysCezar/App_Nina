import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa! : Pessoa;


  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //cria uma instância vazia, para não dar erro de referência
    this.pessoa = new Pessoa();

  }
    //Inserir:
    // - Verificar se o formulário é válido, se não deu nenhum erro
    // - Se Ok
    //Chama o inserir do Service, this.pessoa está preenchida(binding)
    //Redireciona para /pessoas
    inserir(): void{
      if (this.formPessoa.form.valid) {
        this.pessoaService.inserir(this.pessoa);
        this.router.navigate(["/pessoas"]);
    
    }
  }

}
