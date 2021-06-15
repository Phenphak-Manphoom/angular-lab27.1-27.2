import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactMe :string[];
  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
    this.contactMe=this.backendService.getContectMe();
  }

}
