import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActionsComponent } from './user-actions/user-actions.component';



@NgModule({
  declarations: [
    UserActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserActionsComponent,]
})
export class UserModule { }
