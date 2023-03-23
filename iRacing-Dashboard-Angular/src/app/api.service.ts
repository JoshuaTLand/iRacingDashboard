import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  loginURL:string = "https://members-ng.iracing.com/auth";
  recent_racesURL:string = "https://members-ng.iracing.com/data/stats/member_recent_races";
  race_resultsURL:string = "https://members-ng.iracing.com/data/results/get";

  requestLogIn():any{
    const headers = { 
      'content-type': 'application/json' 
  };
    const body = JSON.stringify({
      email: `${Secret.email}`,
      password: `${Secret.password}`
    });
    return this.http.post(`${this.loginURL}`, body, {'headers': headers})
  }

  getRecentRaces(user_id:string):any{
    return this.http.get(`${this.recent_racesURL}?cust_id=${user_id}`)
  }
  getRaceResults(subsession_id:string):any{
    return this.http.get(`${this.race_resultsURL}?subsession_id=${subsession_id}`)
  }
}
