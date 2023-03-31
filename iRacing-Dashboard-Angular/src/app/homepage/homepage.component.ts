
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Race, Races } from '../races';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private apiService:ApiService) {}

  listRaces:Races = {} as Races;
  listRacesDetails:Race[] = [] as Race[];
  recentRaces:string = {} as string;

  ngOnInit(): void {
    this.login();
  }

  login(){
    this.apiService.requestLogIn();
    this.getRecentRaces();
  }

  getRecentRaces(){
    this.apiService.getRecentRaces().subscribe(x => {
      this.listRaces = {} as Races;
      this.listRacesDetails = [] as Race[];
      this.listRaces = x;
      this.listRaces.races.sort((a,b) => {if (a.series_name === b.series_name)
        {
        return a.session_start_time < b.session_start_time ? -1 : 1
        } 
        else 
        {
        return a.series_name < b.series_name ? -1 : 1
        }})
        x.races.forEach((race:any) => {
          this.getRaceData(race.subsession_id);
        });
    });
  }

  getRaceData(subsession_id:number):any{
    this.apiService.getRaceData(subsession_id).subscribe((response:any) => {
      this.listRacesDetails.push(response);
    })
  }

  logLists(){
    console.log(this.listRacesDetails);
    console.log(this.listRaces);
  }
}
