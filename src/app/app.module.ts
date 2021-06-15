import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackendService } from './backend.service';

const routes : Routes=[
  {
    path :'',
    component :HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'skill',
    component : SkillComponent
  },
  {
    path : 'contactme',
    component : ContactMeComponent
  },
  {
    path : 'Portfolio',
    component : PortfolioComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    ContactMeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
