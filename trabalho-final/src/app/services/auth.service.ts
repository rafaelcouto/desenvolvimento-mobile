import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser;

  constructor(private storage: Storage) { }

  login(user) {
    this.loggedUser = user;
    this.storage.set('loggedUser', user);
  }

  logout() {
    this.loggedUser = null;
    this.storage.remove('loggedUser');
  }

  getLoggedUser() {
    return this.storage.get('loggedUser');
  }

  isLogged() {
    return (this.loggedUser);
  }
  
}
