import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-register-collaborator',
  templateUrl: './register-collaborator.component.html',
  styleUrls: ['./register-collaborator.component.css']
})
export class RegisterCollaboratorComponent implements OnInit {
  @ViewChild('formUser') formUser!: NgForm;
  newUser: boolean = true;
  user: User = new User();
  id!: string;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //cria uma instância vazia, para não dar erro de referência
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.newUser = !this.id;

  }

  registerCollaborator(): void {
    this.userService.register(this.user).subscribe(user => {
      this.router.navigate(["/collaborator"]);
    })
  }
}
