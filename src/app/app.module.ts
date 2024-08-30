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
import { AudioPhysioCorrComponent } from './project-pages/audio-physio-corr/audio-physio-corr.component';
import { MlIntroductionComponent } from './ml-project/ml-introduction/ml-introduction.component';
import { MlConclusionsComponent } from './ml-project/ml-conclusions/ml-conclusions.component';
import { MlDataPrepEdaComponent } from './ml-project/ml-data-prep-eda/ml-data-prep-eda.component';
import { MlModelsAndMethodsComponent } from './ml-project/ml-models-and-methods/ml-models-and-methods.component';
import { MlPageNavigationComponent } from './ml-project/ml-page-navigation/ml-page-navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    GtriComponent,
    AudioPhysioCorrComponent,
    MlIntroductionComponent,
    MlConclusionsComponent,
    MlDataPrepEdaComponent,
    MlModelsAndMethodsComponent,
    MlPageNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
