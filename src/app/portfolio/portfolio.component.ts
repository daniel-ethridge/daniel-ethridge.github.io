import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

/* 
TODO 
  - What is a service?
  - ngOnInit
*/

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Daniel Ethridge - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }
}
