import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  loginURL:string = "https://members-ng.iracing.com/auth";

  requestLogIn():any{
    const headers = { 'content-type': 'application/json' };
    const body = {
      "email": `"{{${Secret.email}}}"`,
      "password": `"{{${Secret.password}}}"`
    }
    return this.http.post(`${this.loginURL}`, body, {'headers': headers})
  }
}
