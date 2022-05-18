import { Injectable } from '@angular/core';

import { Pessoa } from '../../shared/models/pessoa.model';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    //precisa do condicional, pois retorna undefined se a chave não existe
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    //obtem a lista completa de pessoas
    const pessoas = this.listarTodos();

    //Seta o ID único
    //Para não precisar gerenciar, será usado o Timestam
    //Quantidade de segundos desde 1970
    pessoa.id = new Date().getTime();

    //adiciona no final da lista
    pessoas.push(pessoa);

    //Adiciona no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }


  //depois tem que botar para pesquisar por ID, NAME, EMAIL, ROLE, STATUS, CREATED AT, UDATE AT, DELIVERIES MADE
  buscaPorID(id: number): Pessoa | undefined {
    //obtem a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    //Efetua a busca
    //find() : retorna o primeiro elemento da lista que satisfaz a condição
    //caso contrario, undefined
    return pessoas.find(pessoa => pessoa.id === id);
  }

  //depois tem que inserir algumas coisas como: name, roles e status
  atualizar(pessoa: Pessoa): void {
    //obtem a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    //varre a lista de pessoas
    //quando encontra a essoa com o mesmo id, altera a lista
    pessoas.forEach( (obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa
      }
    });

    //armazena a nova lista no Local Storage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(id: number): void {
    //obtem a lista completa de pessoas
    //Feito com let ara oder ser alterada
    let pessoas: Pessoa[] = this.listarTodos();

    //filter(): retorna a mesma lista, com os registros que
    //satisfazem a condição, isto é, cujo
    //id é diferente do passado na função
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    //atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
