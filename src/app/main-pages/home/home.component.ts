import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

  featuredProject = {} as Project;

  // Angular service
  constructor(private titleService: Title) {
    this.titleService.setTitle("Daniel Ethridge | Home");
  }

  profilePhoto: string = "../../../assets/profile-photo-cropped.jpg"
}
