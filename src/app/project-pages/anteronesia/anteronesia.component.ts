import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-anteronesia',
  templateUrl: './anteronesia.component.html',
  styleUrls: ['./anteronesia.component.css', '../../styles/styles.css']
})

export class AnteronesiaComponent implements OnInit {

  project = {} as Project;
  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(0);
  }

  // Links
  videoLink: string = "https://www.youtube.com/watch?v=qWli6nnr95o"
  videoPicture: string = "../../../assets/anteronesia.jpg"
  mainThemeLink: string = "https://soundcloud.com/user-219856532/anteronesia-main-theme"
  villageThemeLink: string = "https://soundcloud.com/user-219856532/anteronesia-village-theme"
  forestThemeLink: string = "https://soundcloud.com/user-219856532/anteronesia-forest-theme"
  fightThemeLink: string = "https://soundcloud.com/user-219856532/anteronesia-fight-music-theme"
}
