import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Secret } from './secret';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  loginURL:string = "https://members-ng.iracing.com/auth";
  recent_racesURL:string = "https://members-ng.iracing.com/data/stats/member_recent_races";
  race_resultsURL:string = "https://members-ng.iracing.com/data/results/get";

  requestLogIn():any{
    // const httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Access-Control-Allow-Origin': 'http://localhost:4200'
    // });
    let body = {
      email: `${Secret.email}`,
      password: `${Secret.password}`
    };
    return this.http.post('/auth/post/json', body).subscribe((response) => {
    });
  }

  getRecentRaces(user_id:string):any{
    return this.http.get(`${this.recent_racesURL}?cust_id=${user_id}`)
  }
  getRaceResults(subsession_id:string):any{
    return this.http.get(`${this.race_resultsURL}?subsession_id=${subsession_id}`)
  }
}
