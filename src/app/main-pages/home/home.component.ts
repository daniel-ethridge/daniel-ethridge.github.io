import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

  featuredProject = {} as Project;
  classRoutes: ClassRoutes;

  // Angular service
  constructor(private titleService: Title) {
    this.titleService.setTitle("Daniel Ethridge | Home");
    this.classRoutes = new ClassRoutes();
  }

  profilePhoto: string = "../../../assets/profile-photo-cropped.jpg"
}
