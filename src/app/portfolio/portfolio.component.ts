import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio :string;
  constructor(private backendService :BackendService) { }

  ngOnInit(): void {
    this.portfolio=this.backendService.getPortfolio();
  }

}
