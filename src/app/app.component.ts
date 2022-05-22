import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/services/login.service';
import { User } from './shared/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private router: Router,
    private loginService: LoginService
  ) {}

  get userLoggedIn(): User | null {
    return this.loginService.userLoggedIn;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
