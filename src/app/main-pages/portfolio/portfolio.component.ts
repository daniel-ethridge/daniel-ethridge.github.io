import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { ProjectsService } from '../../_services/projects.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: false
})

export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Daniel Ethridge | Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
