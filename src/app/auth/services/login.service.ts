import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login, Usuario } from 'src/app/shared/models';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout(): void {
  delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario | null> {
    let usu = new Usuario(1, "Func", login.login, login.password, "FUNC");

    if(login.login == login.password) {
      if (login.login == "admin") {
        usu = new Usuario(1, "Admin", login.login, login.password, "ADMIN")
      } else if (login.login == "gerente") {
        usu = new Usuario(1, "Gerente", login.login, login.password, "GERENTE")
      }
      return of(usu);
    } else {
      return of(null);
    }
  }



  constructor() { }


}
