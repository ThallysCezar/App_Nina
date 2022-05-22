import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/models';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {

  user: User[] = [];

  constructor(
    private userService: UserService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.user = [];
    this.showAll();
  }

  showAll(): User[] {
    this.userService.showAll()
      .subscribe((data: User[]) => {
          if (data == null) {
            this.user = [];
          } else {
            this.user = data;
          }
        }
      );

      return this.user;
  }

  remove($event: any, user: User):  void {
    $event.preventDefault();
    if (confirm(`Do you really want to remove this employee ${user.name}`)){
      this.userService.remove(user.id!).subscribe({
        complete: () => {
          this.showAll();
        }
      });
    }
  }

  openModal(user: User){
    const modalRef = this.modalService.open(UserModalComponent);
    modalRef.componentInstance.user = user;
  }
}
