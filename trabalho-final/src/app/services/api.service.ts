import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl;

  constructor(private http: HTTP) { 
    this.baseUrl = 'http://159.65.170.3:3000';
  }

  login(data) {
    return this.http.post(this.baseUrl + '/auth/login/', data, {});
  }

  registerUser(data) {
    return this.http.post(this.baseUrl + '/auth/register/', data, {});
  }

  getAllContacts(userId) {
    return this.http.get(this.baseUrl + `/userid/${userId}/contacts/`, {}, {});
  }

  createContact(userId, contact) {
    return this.http.post(this.baseUrl + `/userid/${userId}/contact/create`, contact, {});
  }

  updateContact(userId, contact) {
    return this.http.put(this.baseUrl + `/userid/${userId}/contacts/${contact._id}`, contact, {});
  }

  deleteContact(userId, contact) {
    return this.http.delete(this.baseUrl + `/userid/${userId}/contact/${contact._id}`, {}, {});
  }

}
