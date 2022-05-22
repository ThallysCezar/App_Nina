import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouteConfigLoadEnd } from '@angular/router';
import { User } from 'src/app/shared/models';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.css']
})

export class EditCollaboratorComponent implements OnInit {
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
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.newUser = !this.id;
    this.userService.searchById(+this.id).subscribe(user => {
      this.user = user;
      this.user.password = "";
    });
  }

  Edit(): void {
        this.userService.change(this.user).subscribe(user => {
        this.router.navigate(["/collaborator"]);
        })
      }
  }
