import { Component } from '@angular/core';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent {

  getUsers(): void {
    fetch('http://127.0.0.1:8000/users/all-users')
    .then(res => res.json())
    .then(result => console.log(result))
  }
}
