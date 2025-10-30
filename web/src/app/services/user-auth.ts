import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  getUserToken() {
    return localStorage.getItem('marketplaceManager_authToken');
  }

  setUserToken(token: string) {
    localStorage.setItem('marketplaceManager_authToken', token);
  }
}
