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
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MlPcaComponent } from './ml-project/ml-methods/ml-pca/ml-pca.component';
import { MlClusteringComponent } from './ml-project/ml-methods/ml-clustering/ml-clustering.component';
import { MlArmComponent } from './ml-project/ml-methods/ml-arm/ml-arm.component';
import { MlDecisionTreeComponent } from './ml-project/ml-methods/ml-decision-tree/ml-decision-tree.component';
import { MlNaiveBayesComponent } from './ml-project/ml-methods/ml-naive-bayes/ml-naive-bayes.component';
import { MlRegressionComponent } from './ml-project/ml-methods/ml-regression/ml-regression.component';
import { MlSupportVectorComponent } from './ml-project/ml-methods/ml-support-vector/ml-support-vector.component';
import { MlEnsembleComponent } from './ml-project/ml-methods/ml-ensemble/ml-ensemble.component';
import { FootnoteComponent } from './references/footnote/footnote.component';
import { ReferencesComponent } from './references/references/references.component';
import { DataMiningNavigationComponent } from './data-mining-project/data-mining-navigation/data-mining-navigation.component';
import { DataMiningIntroComponent } from './data-mining-project/data-mining-intro/data-mining-intro.component';
import { DataMiningExplorationComponent } from './data-mining-project/data-mining-exploration/data-mining-exploration.component';
import { DataMiningModelsComponent } from './data-mining-project/data-mining-models/data-mining-models.component';
import { DataMiningConclusionsComponent } from './data-mining-project/data-mining-conclusions/data-mining-conclusions.component';
import { DataMiningTeamComponent } from './data-mining-project/data-mining-team/data-mining-team.component';
import { LitTimelineComponent } from './lit-timeline/lit-timeline.component';

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
    MlPcaComponent,
    MlClusteringComponent,
    MlArmComponent,
    MlDecisionTreeComponent,
    MlNaiveBayesComponent,
    MlRegressionComponent,
    MlSupportVectorComponent,
    MlEnsembleComponent,
    FootnoteComponent,
    ReferencesComponent,
    DataMiningIntroComponent,
    DataMiningNavigationComponent,
    DataMiningConclusionsComponent,
    DataMiningExplorationComponent,
    DataMiningTeamComponent,
    DataMiningModelsComponent,
    LitTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
