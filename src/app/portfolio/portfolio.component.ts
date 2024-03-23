import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: "Sample angular app",
    summary: "test description", 
    description: "",
    projectLink: "",
    tags: [Tag.ANGULAR],
    pictures: []
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle("Daniel Ethridge - Portfolio");
  }
}
