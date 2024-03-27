import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { HomeComponent } from './main-pages/home/home.component';
import { PortfolioComponent } from './main-pages/portfolio/portfolio.component';
import { ResumeComponent } from './main-pages/resume/resume.component';
import { ContactComponent } from './main-pages/contact/contact.component';
import { ProjectCardComponent } from './main-pages/portfolio/project-card/project-card.component';
import { FormsModule } from '@angular/forms';
import { AnteronesiaComponent } from './project-pages/anteronesia/anteronesia.component';
import { MagnebacusComponent } from './project-pages/magnebacus/magnebacus.component';
import { AudiovascularComponent } from './main-pages/audiovascular/audiovascular.component';
import { CompositionsComponent } from './project-pages/compositions/compositions.component';
import { ShapeSongComponent } from './project-pages/shape-song/shape-song.component';
import { WelcomeToYourHeartComponent } from './project-pages/welcome-to-your-heart/welcome-to-your-heart.component';
import { GtriComponent } from './project-pages/gtri/gtri.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    ProjectCardComponent,
    AnteronesiaComponent,
    MagnebacusComponent,
    AudiovascularComponent,
    CompositionsComponent,
    ShapeSongComponent,
    WelcomeToYourHeartComponent,
    GtriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
