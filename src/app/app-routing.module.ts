import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { ClassRoutes } from './_models/ClassRoutes';

/*
Add routing to new pages below. Path then Angular component
*/

let classRoutes = new ClassRoutes();

const routes: Routes = [
  // Main pages

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
