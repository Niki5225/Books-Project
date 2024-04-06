import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthServiceService) { }

  onSubmit(form: NgForm) {
    if (!form) {
      return;
    }

    if (form.invalid) {
      alert('Error: Your Form is invalid');
      form.reset();
    }

    // const data = JSON.stringify(this.getFormData(form));

    // this.authService.registerUser(data).subscribe((data) => console.log(data));


    form.reset();
  }

  private getFormData(form: NgForm) {
    return form.value;
  }
}
