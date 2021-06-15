import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 aboutMe :string;
  constructor(private backservice :BackendService) { }

  ngOnInit(): void {
    this.aboutMe=this.backservice.getAboutMe();
  }

}
