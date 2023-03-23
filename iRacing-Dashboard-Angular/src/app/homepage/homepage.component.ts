import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private apiService:ApiService) {}

  login(){
    this.apiService.requestLogIn().subscribe((response:any) => {
      console.log(response);
    })
  }
}

