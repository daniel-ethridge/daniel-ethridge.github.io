import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { ClassRoutes } from '../_models/ClassRoutes';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  routes: ClassRoutes = new ClassRoutes();

  projects: Project[] = [
    // {
    //   id: 10,
    //   summary: "Music and Emotion",
    //   projectPage: this.routes.musicEmotion,
    //   image: ""
    // },
    {
      id: 9,
      summary: "Two sides, countless victims: diving into the U.S. gun control debate",
      projectPage: this.routes.tmHome,
      image: "../../assets/project-thumbnails/gun-control-debate.jpg"
    },
    {
      id: 8,
      summary: "What can Steam reviews teach us about game design?",
      projectPage: "portfolio/data-mining/introduction",
      image: "../../assets/project-thumbnails/controller.jpg"
    },
    {
      id: 7,
      summary: "What does it take to make it onto the Billboard Top 100?",
      projectPage: "/portfolio/machine-learning/introduction",
      image: "../../assets/project-thumbnails/billboard-award.jpg"
    },
    {
      id: 6,
      summary: "Low-level audio feature correlates to physiological arousal",
      projectPage: "/portfolio/audio-physio-correlates",
      image: "../../assets/project-thumbnails/ekg-music.jpg"
    },
    {
      id: 0,
      summary: "Anteronesia: A videogame prototype exploring anterograde amnesia",
      projectPage: "/portfolio/anteronesia",
      image: "../../assets/project-thumbnails/anteronesia.jpg"
    },
    {
      id: 1,
      summary: "The Magnebacus: A new electronic instrument",
      projectPage: "/portfolio/magnebacus",
      image: "../../assets/project-thumbnails/magnebacus.jpg"
    },
    {
      id: 2,
      summary: "Select original music",
      projectPage: "/portfolio/compositions",
      image: "../../assets/project-thumbnails/piano.jpg"
    },
    {
      id: 3,
      summary: "GTRI: software engineering with Python and C++",
      projectPage: "portfolio/gtri",
      image: "../../assets/project-thumbnails/code.jpg"
    },
    {
      id: 4,
      summary: "Shape Song: master's project",
      projectPage: "portfolio/shape-song",
      image: "../../assets/project-thumbnails/shape-song.jpg"
    },
    {
      id: 5,
      summary: "Welcome to Your Heart",
      projectPage: "/portfolio/welcome-to-your-heart",
      image: "../../assets/project-thumbnails/heart-welcome.jpg"
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
