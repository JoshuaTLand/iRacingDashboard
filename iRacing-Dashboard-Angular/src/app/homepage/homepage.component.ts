import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private route:ActivatedRoute, private apiService:ApiService) {}

  login(){
    this.apiService.requestLogIn().subscribe((response:any) => {
    })
  }

}
