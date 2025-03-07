import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-pages/home/home.component';
import { ClassRoutes } from './_models/ClassRoutes';
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
import { AudioPhysioCorrComponent } from './project-pages/audio-physio-corr/audio-physio-corr.component';
import { MlIntroductionComponent } from './project-pages/ml-project/ml-introduction/ml-introduction.component';
import { MlDataPrepEdaComponent } from './project-pages/ml-project/ml-data-prep-eda/ml-data-prep-eda.component';
import { MlModelsAndMethodsComponent } from './project-pages/ml-project/ml-models-and-methods/ml-models-and-methods.component';
import { MlConclusionsComponent } from './project-pages/ml-project/ml-conclusions/ml-conclusions.component';
import { MlPcaComponent } from './project-pages/ml-project/ml-methods/ml-pca/ml-pca.component';
import { MlClusteringComponent } from './project-pages/ml-project/ml-methods/ml-clustering/ml-clustering.component';
import { MlArmComponent } from './project-pages/ml-project/ml-methods/ml-arm/ml-arm.component';
import { MlNaiveBayesComponent } from './project-pages/ml-project/ml-methods/ml-naive-bayes/ml-naive-bayes.component';
import { MlDecisionTreeComponent } from './project-pages/ml-project/ml-methods/ml-decision-tree/ml-decision-tree.component';
import { MlRegressionComponent } from './project-pages/ml-project/ml-methods/ml-regression/ml-regression.component';
import { MlSupportVectorComponent } from './project-pages/ml-project/ml-methods/ml-support-vector/ml-support-vector.component';
import { MlEnsembleComponent } from './project-pages/ml-project/ml-methods/ml-ensemble/ml-ensemble.component';
import { DataMiningIntroComponent } from './project-pages/data-mining-project/data-mining-intro/data-mining-intro.component';
import { DataMiningExplorationComponent } from './project-pages/data-mining-project/data-mining-exploration/data-mining-exploration.component';
import { DataMiningModelsComponent } from './project-pages/data-mining-project/data-mining-models/data-mining-models.component';
import { DataMiningConclusionsComponent } from './project-pages/data-mining-project/data-mining-conclusions/data-mining-conclusions.component';
import { DataMiningTeamComponent } from './project-pages/data-mining-project/data-mining-team/data-mining-team.component';
import { LitTimelineComponent } from './lit-timeline/lit-timeline.component';
import { TextMiningIntroComponent } from './project-pages/text-mining-project/text-mining-intro/text-mining-intro.component';
import { TextMiningDataComponent } from './project-pages/text-mining-project/text-mining-data/text-mining-data.component';
import { TextMiningConclusionsComponent } from './project-pages/text-mining-project/text-mining-conclusions/text-mining-conclusions.component';
import { TextMiningArmComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-arm/text-mining-arm.component';
import { TextMiningClusteringComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-clustering/text-mining-clustering.component';
import { TextMiningDescTreeComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-desc-tree/text-mining-desc-tree.component';
import { TextMiningLdaComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-lda/text-mining-lda.component';
import { TextMiningNbComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-nb/text-mining-nb.component';
import { TextMiningNnComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-nn/text-mining-nn.component';
import { TextMiningSvmComponent } from './project-pages/text-mining-project/text-mining-models/text-mining-svm/text-mining-svm.component';
import { AboutMeComponent } from './main-pages/about-me/about-me.component';

/*
Add routing to new pages below. Path then Angular component
*/

let classRoutes = new ClassRoutes();

const routes: Routes = [
  // Main pages
  {path: "home", component: HomeComponent},
  {path: "about-me", component: AboutMeComponent},
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
  {path: "portfolio/audio-physio-correlates", component: AudioPhysioCorrComponent},

  // Literature Visualizations
  {path: "literature-timeline", component: LitTimelineComponent},

  /* *** Machine Learning Project *** */
  // Main pages
  {path: classRoutes.mlIntroduction, component: MlIntroductionComponent},
  {path: classRoutes.mlEda, component: MlDataPrepEdaComponent},
  {path: "portfolio/machine-learning/models-and-methods", component: MlModelsAndMethodsComponent},
  {path: classRoutes.mlConclusion, component: MlConclusionsComponent},
  
  // Methods
  {path: "portfolio/machine-learning/methods/principal-component-analysis", component: MlPcaComponent},
  {path: "portfolio/machine-learning/methods/clustering", component: MlClusteringComponent},
  {path: "portfolio/machine-learning/methods/association-rule-mining", component: MlArmComponent},
  {path: "portfolio/machine-learning/methods/naive-bayes", component: MlNaiveBayesComponent},
  {path: "portfolio/machine-learning/methods/decision-tree", component: MlDecisionTreeComponent},
  {path: "portfolio/machine-learning/methods/regression", component: MlRegressionComponent},
  {path: "portfolio/machine-learning/methods/support-vector-machines", component: MlSupportVectorComponent},
  {path: "portfolio/machine-learning/methods/ensemble", component: MlEnsembleComponent},

  /* *** Data Mining Project *** */
  {path: "portfolio/data-mining/introduction", component: DataMiningIntroComponent},
  {path: "portfolio/data-mining/data-exploration", component: DataMiningExplorationComponent},
  {path: "portfolio/data-mining/models", component: DataMiningModelsComponent},
  {path: classRoutes.dmConclusion, component: DataMiningConclusionsComponent},
  {path: "portfolio/data-mining/team", component: DataMiningTeamComponent},

  /* *** Text Mining Project */
  {path: classRoutes.tmHome, component: TextMiningIntroComponent},
  {path: classRoutes.tmIntroduction, component: TextMiningIntroComponent},
  {path: classRoutes.tmData, component: TextMiningDataComponent},
  {path: classRoutes.tmConclusions, component: TextMiningConclusionsComponent},
  {path: classRoutes.tmArm, component: TextMiningArmComponent},
  {path: classRoutes.tmClustering, component: TextMiningClusteringComponent},
  {path: classRoutes.tmDescTree, component: TextMiningDescTreeComponent},
  {path: classRoutes.tmLda, component: TextMiningLdaComponent},
  {path: classRoutes.tmNb, component: TextMiningNbComponent},
  {path: classRoutes.tmNn, component: TextMiningNnComponent},
  {path: classRoutes.tmSvm, component: TextMiningSvmComponent},

  {path: "**", component:HomeComponent, pathMatch: 'full'}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
