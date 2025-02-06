import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {NgForOf, NgIf} from '@angular/common';
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    NgForOf,
    TasksComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
