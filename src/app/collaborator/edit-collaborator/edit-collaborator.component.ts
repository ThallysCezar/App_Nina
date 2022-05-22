import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouteConfigLoadEnd } from '@angular/router';
import { User } from 'src/app/shared/models';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

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
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.newUser = !this.id;
    this.usuarioService.buscarPorId(+this.id).subscribe(user => {
      this.user = user;
      this.user.password = "";
    });
  }

  salvarEditar(): void {
        this.usuarioService.alterar(this.user).subscribe(user => {
        this.router.navigate(["/collaborator"]);
        })
      }
  }
