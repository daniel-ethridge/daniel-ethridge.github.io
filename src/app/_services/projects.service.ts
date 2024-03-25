import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: "Anteronesia",
      summary: "Videogame prototype exploring anterograde amnesia",
      description: "I developed a prototype of a metroidvania-style videogame called Anteronesia (a portmanteau of anterograde and amnesia) to serve as my final project for two classes during the last semester of my master's degree. The two classes were “Game Design” and “Computer Music Composition”. I developed the game within Unity, and I composed original music for it using Ableton Live. While Unity has a built in audio engine, it is not strong or flexible enough for what I wanted to acheive musically.I wanted the music to change according to the player's state in the game as a way to provide an auditory cue of how things are going.To acheive this, I utilized a dedicated audio engine called Wwise.As the player's health drops, the higher freuquencies are filtered out of the audio while an eerie melody begins to play louder and louder.This serves as a reminder that death could be near.As per the class assignment, the game had to be developed using at least once resource to serve as the core of a resource management system.I chose memory as this resource which fits perfectly with the amnesia theme.As the player moves through the world, they collect memories that are scattered throughout.This memory is what the player can use to heal themselves.With more development time, I would have loved to also have memory be a second currency in the game(alongside regulary money) as well as play a role in a spellcasting system.",
      projectLink: "",
      videoLink: "https://www.youtube.com/watch?v=qWli6nnr95o",
      tags: [Tag.CSHARP, Tag.UNITY, Tag.WWISE, Tag.COMPOSITION],
      pictures: ["../../assets/play-anteronesia.jpg"]
    },
    {
      id: 1,
      name: "GTRI Experience",
      summary: "Software Development at the Georgia Tech Research Institute",
      description: "Testing the description",
      projectLink: "",
      videoLink: "",
      tags: [Tag.ANGULAR],
      pictures: []
    },
    {
      id: 2,
      name: "Sample angular app3",
      summary: "test description3",
      description: "",
      projectLink: "",
      videoLink: "",
      tags: [Tag.ANGULAR],
      pictures: []
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id);
    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let includesTag = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          includesTag = false;
        }
      });

      if (includesTag) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
