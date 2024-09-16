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
import { MlIntroductionComponent } from './ml-project/ml-introduction/ml-introduction.component';
import { MlDataPrepEdaComponent } from './ml-project/ml-data-prep-eda/ml-data-prep-eda.component';
import { MlModelsAndMethodsComponent } from './ml-project/ml-models-and-methods/ml-models-and-methods.component';
import { MlConclusionsComponent } from './ml-project/ml-conclusions/ml-conclusions.component';
import { MlPcaComponent } from './ml-project/ml-methods/ml-pca/ml-pca.component';
import { MlClusteringComponent } from './ml-project/ml-methods/ml-clustering/ml-clustering.component';
import { MlArmComponent } from './ml-project/ml-methods/ml-arm/ml-arm.component';
import { MlNaiveBayesComponent } from './ml-project/ml-methods/ml-naive-bayes/ml-naive-bayes.component';
import { MlDecisionTreeComponent } from './ml-project/ml-methods/ml-decision-tree/ml-decision-tree.component';
import { MlRegressionComponent } from './ml-project/ml-methods/ml-regression/ml-regression.component';
import { MlSupportVectorComponent } from './ml-project/ml-methods/ml-support-vector/ml-support-vector.component';
import { MlEnsembleComponent } from './ml-project/ml-methods/ml-ensemble/ml-ensemble.component';

/*
Add routing to new pages below. Path then Angular component
*/

let classRoutes = new ClassRoutes();

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
  {path: "portfolio/audio-physio-correlates", component: AudioPhysioCorrComponent},

  /* *** Machine Learning Project *** */
  // Main pages
  {path: classRoutes.mlIntroduction, component: MlIntroductionComponent},
  {path: classRoutes.mlEda, component: MlDataPrepEdaComponent},
  {path: "portfolio/machine-learning/models-and-methods", component: MlModelsAndMethodsComponent},
  {path: "portfolio/machine-learning/conclusions", component: MlConclusionsComponent},
  
  // Methods
  {path: "portfolio/machine-learning/methods/principal-component-analysis", component: MlPcaComponent},
  {path: "portfolio/machine-learning/methods/clustering", component: MlClusteringComponent},
  {path: "portfolio/machine-learning/methods/association-rule-mining", component: MlArmComponent},
  {path: "portfolio/machine-learning/methods/naive-bayes", component: MlNaiveBayesComponent},
  {path: "portfolio/machine-learning/methods/decision-trees", component: MlDecisionTreeComponent},
  {path: "portfolio/machine-learning/methods/regression", component: MlRegressionComponent},
  {path: "portfolio/machine-learning/methods/support-vector-machines", component: MlSupportVectorComponent},
  {path: "portfolio/machine-learning/methods/ensemble", component: MlEnsembleComponent},


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
