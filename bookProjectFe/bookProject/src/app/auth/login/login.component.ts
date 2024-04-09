import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthServiceService) { }


  navToRegister(path: string) {
    this.router.navigate([path]);
  }

  onSubmit(form: NgForm) {
    if (!form) {
      return;
    }

    if (form.invalid) {
      alert('Error: Your Form is invalid');
      form.reset();
    }

    const data = JSON.stringify(this.getFormData(form));

    this.authService.login(data).subscribe((data) => localStorage.setItem('jwt', data['access']));
    


    form.reset();
  }

  private getFormData(form: NgForm) {
    return form.value;
  }

}


// logInForm;
//   constructor(private formBuilder: FormBuilder, private authService: AuthServiceService, private router: Router) {
//     this.logInForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   navToRegister(path: string) {
//     this.router.navigate([path]);
//   }

//   ngOnInit(): void {
//   }

//   logInUser(user: User): void {
//     this.authService.logIn(user.email, user.password).subscribe({
//       next: (data) => {
//         console.log(data);
//       },
//       error: (error) => {
//         console.log(error);
//       }
//     }
//     );
//   }

//   onSubmit(formData: User): void {
//     if (this.logInForm.invalid) {
//       console.log(this.logInForm.errors);
//     } else {
//       this.logInUser(formData);
//     }
//   }