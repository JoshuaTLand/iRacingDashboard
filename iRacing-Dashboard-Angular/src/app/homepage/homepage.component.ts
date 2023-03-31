
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RaceDetails } from '../race';
import { Races } from '../races';
import { SeriesTrack } from '../series-track';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private apiService:ApiService) {}

  listRaces:Races = {} as Races;
  listRacesDetails:RaceDetails[] = [] as RaceDetails[];
  raceHeaders: SeriesTrack[] = [] as SeriesTrack[];
  recentRaces:string = {} as string;

  ngOnInit():void {
    this.login();
  }

  login(){
    this.apiService.requestLogIn();
    this.getRecentRaces();
  }

  getRecentRaces(){
    this.apiService.getRecentRaces().subscribe(x => {
      //Clear Out Current Arrays
      this.listRaces = {} as Races;
      this.listRacesDetails = [] as RaceDetails[];
      this.raceHeaders = [] as SeriesTrack[];
      //Assign API Call Response to listRaces Array
      this.listRaces = x;
      //Sort listRaces Array by Series Name and Session Start Time
      this.listRaces.races.sort((a,b) => {if (a.series_name === b.series_name)
        {
        return a.session_start_time < b.session_start_time ? -1 : 1
        } 
        else
        {
        return a.series_name < b.series_name ? -1 : 1
        }});
      //Extract race data for each race in listRaces
      this.listRaces.races.forEach((race:any) => {
        this.getRaceData(race.subsession_id);
      });
      //Generate unique series/track headers
      this.listRaces.races.forEach(race => {
        let new_header:SeriesTrack = {
          series_name: race.series_name,
          track_name : race.track.track_name
        }
        //Check if race/track combination exists in raceHeaders array
        if(!this.raceHeaders.some(race_header => race_header.series_name === new_header.series_name && race_header.track_name === new_header.track_name)){
          this.raceHeaders.push(new_header);
        }
      });
      console.log(this.raceHeaders);
    });
  }

  getRaceData(subsession_id:number):RaceDetails{
    return this.apiService.getRaceData(subsession_id).subscribe((race:RaceDetails) => {
      this.listRacesDetails.push(race);
    });
  }

  logLists(){
    console.log(this.listRacesDetails);
    console.log(this.listRaces);
  }
}
