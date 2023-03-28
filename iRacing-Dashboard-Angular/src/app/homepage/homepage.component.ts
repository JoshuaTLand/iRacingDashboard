import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { ApiService } from '../api.service';
import { Races } from '../races';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private apiService:ApiService) {}
  
  listRaces:Races = {} as Races;
  recentRaces:string = {} as string;
  login(){
    this.apiService.requestLogIn();
  }
  getRecentRaces(){
    this.apiService.getRecentRaces().subscribe(x => {
      this.listRaces = x;
      this.listRaces.races.sort((a,b) => (a.series_name < b.series_name) ? -1: 1);
      console.log(x);
    });
  }
  getRaceData(subsession_id:number):any{
    return this.apiService.getRaceData(subsession_id).subscribe((response:any) => {
      console.log(response);
    })
  }
}
