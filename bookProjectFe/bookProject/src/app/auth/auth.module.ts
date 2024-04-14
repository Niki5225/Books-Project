import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MinCountDirective } from './min-count.directive';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    MinCountDirective,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule { }
