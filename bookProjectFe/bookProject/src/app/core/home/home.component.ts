import { Component } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private cookieService: CookieService){}

  isLogged(): boolean {
    return this.cookieService.hasJwtTokenCookie();
  }
}
