import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-services/auth-service.service';
import { CookieService } from 'src/app/services/cookie.service';
import { HelperFunctionsService } from 'src/app/shared/helper-functions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthServiceService, private cookieService: CookieService) { }


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

    this.authService.login(data).subscribe((data) => {
      const jwt = data['access'];
      this.cookieService.setJwtCookie(jwt);

      // localStorage.setItem('jwt', data['access']);
      complete: console.log(this.cookieService.hasJwtTokenCookie());
      
    });
      


    form.reset();
  }

  private getFormData(form: NgForm) {
    return form.value;
  }

}

