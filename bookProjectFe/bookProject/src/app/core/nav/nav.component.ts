import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-services/auth-service.service';
import { CookieService } from 'src/app/services/cookie.service';
import { HelperFunctionsService } from 'src/app/shared/helper-functions.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router, private cookieService: CookieService, private authService: AuthServiceService,
  ){}

  isLoggedIn(): boolean {
    return this.cookieService.hasJwtTokenCookie();
  }

  navTo(path: string): void {

    this.router.navigate([path]);
  }

  logout(): void {
    this.authService.clearToken('jwt');
    this.navTo('');
  }
}
