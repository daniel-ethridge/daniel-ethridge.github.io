import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { ClassRoutes } from './_models/ClassRoutes';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';

/*
Add routing to new pages below. Path then Angular component
*/

let classRoutes = new ClassRoutes();

const routes: Routes = [
  // Main pages
  {path: classRoutes.home, component:HomeComponent, pathMatch: "full"},
  {path: "**", component:HomeComponent, pathMatch: 'full'}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
}

// If you want to define constants for your external links:
export const externalRoutes = {
  blog: 'https://blog.yourdomain.com',
  docs: 'https://docs.yourdomain.com',
  api: 'https://api.yourdomain.com'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
