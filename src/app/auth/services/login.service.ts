import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login, User } from 'src/app/shared/models';

const LS_CHAVE: string = "userLoggedIn";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public get userLoggedIn(): User {
    let user = localStorage[LS_CHAVE];
    return (user ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set userLoggedIn(user: User) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }

  logout(): void {
  delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<User | null> {
    let user = new User(1, "Emp", login.login, login.password, "EMP");

    if(login.login == login.password) {
      if (login.login == "admin") {
        user = new User(1, "Admin", login.login, login.password, "ADMIN")
      } else if (login.login == "gerente") {
        user = new User(1, "Gerente", login.login, login.password, "GERENTE")
      }
      else if (login.login == "driver") {
        user = new User(1, "Driver", login.login, login.password, "DRIVER")
      }
      else if (login.login == "deliverer") {
        user = new User(1, "Deliverer", login.login, login.password, "DELIVERER")
      }
      return of(user);
    } else {
      return of(null);
    }
  }
}
