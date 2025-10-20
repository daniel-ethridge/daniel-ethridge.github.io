import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
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
import { MlIntroductionComponent } from './project-pages/ml-project/ml-introduction/ml-introduction.component';
import { MlConclusionsComponent } from './project-pages/ml-project/ml-conclusions/ml-conclusions.component';
import { MlDataPrepEdaComponent } from './project-pages/ml-project/ml-data-prep-eda/ml-data-prep-eda.component';
import { MlModelsAndMethodsComponent } from './project-pages/ml-project/ml-models-and-methods/ml-models-and-methods.component';
import { MlPageNavigationComponent } from './project-pages/ml-project/ml-page-navigation/ml-page-navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MlPcaComponent } from './project-pages/ml-project/ml-methods/ml-pca/ml-pca.component';
import { MlClusteringComponent } from './project-pages/ml-project/ml-methods/ml-clustering/ml-clustering.component';
import { MlArmComponent } from './project-pages/ml-project/ml-methods/ml-arm/ml-arm.component';
import { MlDecisionTreeComponent } from './project-pages/ml-project/ml-methods/ml-decision-tree/ml-decision-tree.component';
import { MlNaiveBayesComponent } from './project-pages/ml-project/ml-methods/ml-naive-bayes/ml-naive-bayes.component';
import { MlRegressionComponent } from './project-pages/ml-project/ml-methods/ml-regression/ml-regression.component';
import { MlSupportVectorComponent } from './project-pages/ml-project/ml-methods/ml-support-vector/ml-support-vector.component';
import { MlEnsembleComponent } from './project-pages/ml-project/ml-methods/ml-ensemble/ml-ensemble.component';
import { DataMiningNavigationComponent } from './project-pages/data-mining-project/data-mining-navigation/data-mining-navigation.component';
import { DataMiningIntroComponent } from './project-pages/data-mining-project/data-mining-intro/data-mining-intro.component';
import { DataMiningExplorationComponent } from './project-pages/data-mining-project/data-mining-exploration/data-mining-exploration.component';
import { DataMiningModelsComponent } from './project-pages/data-mining-project/data-mining-models/data-mining-models.component';
import { DataMiningConclusionsComponent } from './project-pages/data-mining-project/data-mining-conclusions/data-mining-conclusions.component';
import { DataMiningTeamComponent } from './project-pages/data-mining-project/data-mining-team/data-mining-team.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TextMiningNavigationComponent } from './project-pages/text-mining-project/text-mining-navigation/text-mining-navigation.component';
import { TextMiningIntroComponent } from './project-pages/text-mining-project/text-mining-intro/text-mining-intro.component';
import { TextMiningDataComponent } from './project-pages/text-mining-project/text-mining-data/text-mining-data.component';
import { TextMiningClusteringComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-clustering/text-mining-clustering.component';
import { TextMiningArmComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-arm/text-mining-arm.component';
import { TextMiningLdaComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-lda/text-mining-lda.component';
import { TextMiningNbComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-nb/text-mining-nb.component';
import { TextMiningDescTreeComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-desc-tree/text-mining-desc-tree.component';
import { TextMiningSvmComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-svm/text-mining-svm.component';
import { TextMiningNnComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-nn/text-mining-nn.component';
import { TextMiningConclusionsComponent } from './project-pages/text-mining-project/text-mining-conclusions/text-mining-conclusions.component';
import { FootnotesComponent } from './footnotes/footnotes.component';
import { CiteDirective } from './_directives/cite.directive';
import { AboutMeComponent } from './main-pages/about-me/about-me.component';
import { MusicEmotionComponent } from './project-pages/music-emotion/music-emotion.component';
import { SoupComponent } from './project-pages/soup/soup.component';
import { DatasetCreationComponent } from './main-pages/dataset-creation/dataset-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    DataMiningIntroComponent,
    DataMiningNavigationComponent,
    DataMiningConclusionsComponent,
    DataMiningExplorationComponent,
    DataMiningTeamComponent,
    DataMiningModelsComponent,
    TextMiningNavigationComponent,
    TextMiningIntroComponent,
    TextMiningDataComponent,
    TextMiningClusteringComponent,
    TextMiningArmComponent,
    TextMiningLdaComponent,
    TextMiningNbComponent,
    TextMiningDescTreeComponent,
    TextMiningSvmComponent,
    TextMiningNnComponent,
    TextMiningConclusionsComponent,
    CiteDirective,
    FootnotesComponent,
    AboutMeComponent,
    MusicEmotionComponent,
    SoupComponent,
    DatasetCreationComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    CollapseModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
