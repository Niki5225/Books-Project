import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-services/user-service.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent {

  // constructor(private userService: UserServiceService){}
  // getUsersFunc(): void {
  //   this.userService.getUsers().subscribe(users => {console.log(users)})
  // }
}
