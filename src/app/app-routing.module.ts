import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { StudyComponent } from './study/study.component';

const routes: Routes = [
  // Main pages
  {path: "**", component: StudyComponent, pathMatch: 'full'}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
