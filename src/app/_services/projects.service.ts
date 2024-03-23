import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Sample angular app1", summary: "test description1", description: "", projectLink: "", tags: [Tag.ANGULAR], pictures: []},
    {id: 1, name: "Sample angular app2", summary: "test description2", description: "", projectLink: "", tags: [Tag.ANGULAR], pictures: []},
    {id: 2, name: "Sample angular app3", summary: "test description3", description: "", projectLink: "", tags: [Tag.ANGULAR], pictures: []}
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id);
    }

    return project;
  }
}
