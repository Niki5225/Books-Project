import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  // Check if the current user has a JWT token cookie
  hasJwtTokenCookie(): boolean {
    const cookies = this.parseCookies();
    return 'jwt' in cookies;
  }

  // Get JWT token cookie value
  getJwtTokenCookie(): string | undefined {
    const cookies = this.parseCookies();
    return cookies['jwt'];
  }

  // Parse all cookies into an object
  private parseCookies(): { [name: string]: string } {
    return this.document.cookie.split(';').reduce((cookies, cookie) => {
      const [name, value] = cookie.trim().split('=');
      return { ...cookies, [name]: value };
    }, {});
  }
}