import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MinCountDirective } from '../min-count.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

  navToRegister(path: string) {
    this.router.navigate([path]);
  }

  onSubmit(form: NgForm) {
    if (!form){
      return;
    }

    if (form.invalid){
      alert('Error: Your Form is invalid')
    }
    form.reset();
  }
}
