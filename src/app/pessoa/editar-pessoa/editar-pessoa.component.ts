import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { ActivatedRoute, Router, RouteConfigLoadEnd } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa! : Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    //Operador + (antes do this) converter para número
    //buscar também ppor, name, email, role, status, created at, update at, deliveries made
    let id = +this.route.snapshot.params['id'];
    //Com o id, obtem a pessoa
    const res = this.pessoaService.buscaPorID(id);
    if (res != undefined) {
      this.pessoa = res;
    } else {
      throw new Error ("Pessoa não encontrada: id = " + id);
    }
  }
atualizar(): void {
  //verificar se o formulário é válido
  if (this.formPessoa.form.valid) {
    //efetivamente atualiza a pessoa
    this.pessoaService.atualizar(this.pessoa);
    //redirecionar para /pessoa/listar
    this.router.navigate(['/pessoas']);
  }
}
}
