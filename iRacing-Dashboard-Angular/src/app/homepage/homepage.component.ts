import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
    this.apiService.getRecentRaces().subscribe((response:any) => {
      this.recentRaces = response.link;
    })
  }
  extractRaces(){
    this.apiService.extractRecentRaces(this.recentRaces).subscribe((response:any) => {
    })
  }
}
