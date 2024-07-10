import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  //standalone: true,
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  //imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  // class attributes
  title = 'project';
  users = DUMMY_USERS;
  selectedUserId?: string;

  // methods


  // find operation does not find a user at all, so in that case we add exclamation
  get selectedUser() {
    return this.users.find((user) => 
      user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // console.log('Select user ' + id);

    this.selectedUserId = id;
  }

  
}
