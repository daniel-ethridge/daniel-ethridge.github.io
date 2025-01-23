import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { ClassRoutes } from '../_models/ClassRoutes';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  routes: ClassRoutes = new ClassRoutes();

  projects: Project[] = [
    {
      id: 9,
      name: "Text Mining Project",
      summary: "Two Sides, Countless Victims: Diving into the U.S. Gun Debate",
      projectPage: this.routes.tmHome
    },
    {
      id: 8,
      name: "Data Mining Project",
      summary: "What can Steam Reviews Teach us about Game Design?",
      projectPage: "portfolio/data-mining/introduction"
    },
    {
      id: 7,
      name: "Machine Learning Project",
      summary: "What does it take to make it onto the Billboard Top 100?",
      projectPage: "/portfolio/machine-learning/introduction"
    },
    {
      id: 6,
      name: "Low-Level Audio Feature Correlates to Physiological Arousal",
      summary: "PhD Research: Year 1",
      projectPage: "/portfolio/audio-physio-correlates"
    },
    {
      id: 0,
      name: "Anteronesia",
      summary: "Videogame prototype exploring anterograde amnesia",
      projectPage: "/portfolio/anteronesia",
    },
    {
      id: 1,
      name: "The Magnebacus",
      summary: "A New Electronic Instrument",
      projectPage: "/portfolio/magnebacus",
    },
    {
      id: 2,
      name: "Music",
      summary: "Select Original Music Compositions",
      projectPage: "/portfolio/compositions",
    },
    {
      id: 3,
      name: "Georgia Tech Research Institute (GTRI)",
      summary: "Software Engineering with Python and C++",
      projectPage: "portfolio/gtri",
    },
    {
      id: 4,
      name: "Shape Song",
      summary: "Master's Project",
      projectPage: "portfolio/shape-song",
    },
    {
      id: 5,
      name: "Welcome to Your Heart",
      summary: "How does music affect your heart?",
      projectPage: "/portfolio/welcome-to-your-heart",
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("This is no project with an ID of " + id + ".");
    }

    return project;
  }
}
