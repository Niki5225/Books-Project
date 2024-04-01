import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
