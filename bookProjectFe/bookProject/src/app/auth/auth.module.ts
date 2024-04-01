import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { MinCountDirective } from './min-count.directive';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    MinCountDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule { }
