import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-pages/home/home.component';
import { PortfolioComponent } from './main-pages/portfolio/portfolio.component';
import { ResumeComponent } from './main-pages/resume/resume.component';
import { ContactComponent } from './main-pages/contact/contact.component';
import { AnteronesiaComponent } from './project-pages/anteronesia/anteronesia.component';
import { MagnebacusComponent } from './project-pages/magnebacus/magnebacus.component';
import { AudiovascularComponent } from './main-pages/audiovascular/audiovascular.component';
import { CompositionsComponent } from './project-pages/compositions/compositions.component';
import { GtriComponent } from './project-pages/gtri/gtri.component';
import { ShapeSongComponent } from './project-pages/shape-song/shape-song.component';
import { WelcomeToYourHeartComponent } from './project-pages/welcome-to-your-heart/welcome-to-your-heart.component';

const routes: Routes = [
  // Main pages
  {path: "home", component: HomeComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "resume", component: ResumeComponent},
  {path: "contact", component: ContactComponent},
  {path: "audiovascular", component: AudiovascularComponent},

  // Project pages
  {path: "portfolio/anteronesia", component: AnteronesiaComponent},
  {path: "portfolio/magnebacus", component: MagnebacusComponent},
  {path: "portfolio/compositions", component: CompositionsComponent},
  {path: "portfolio/gtri", component: GtriComponent},
  {path: "portfolio/shape-song", component: ShapeSongComponent},
  {path: "portfolio/welcome-to-your-heart", component: WelcomeToYourHeartComponent},

  {path: "**", component:HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
