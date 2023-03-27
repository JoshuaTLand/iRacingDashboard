import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Secret } from '../secret';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private apiService:ApiService) {}
  
  login(){
    this.apiService.requestLogIn();
    //console.log(Secret.custId);
  }
  getRecentRaces(){
    this.apiService.getRecentRaces().subscribe((response:any) => {
      console.log(response);
    })
  }
}

