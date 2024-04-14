import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService{

  constructor(@Inject(DOCUMENT) private document: Document) { }

  // Check if the current user has a JWT token cookie
  hasJwtTokenCookie(): boolean {
    const cookies = document.cookie;
    if (cookies.includes('jwt')) {
      return true;
    } else {
      return false;
    }
  }

  setJwtCookie(token: string){
    this.setCookie('jwt', token, 1);
    
  }

  private setCookie(name: string, value: string, expiryDays: number): void {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + expiryDays);

    const cookieValue = encodeURIComponent(value) + 
                        ((expiryDays) ? `;expires=${expiryDate.toUTCString()}` : '');

    document.cookie = `${name}=${cookieValue};path=/`;
  }
}