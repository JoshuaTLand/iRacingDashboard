import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Secret } from './secret';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  requestLogIn():any{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };
    let body = {
      email: `${Secret.email}`,
      password: `${Secret.password}`
    };
    return this.http.post('/auth', body, httpOptions).subscribe((response) => {
    });
  }

  cust_ID:string = "543757";
  getRecentRaces():any{
    return this.http.get(`data/stats/member_recent_races?cust_id=${this.cust_ID}`);
  }

  extractRecentRaces(url:string){
    return this.http.get(`${url}`);
  }

  getRaceResults(subsession_id:string):any{
    
  }
}
