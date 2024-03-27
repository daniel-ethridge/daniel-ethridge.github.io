import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-magnebacus',
  templateUrl: './shape-song.component.html',
  styleUrls: ['./shape-song.component.css', './../../app.component.css']
})

export class ShapeSongComponent implements OnInit {

  project = {} as Project;
  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(4);
  }

  videoImg: string = "../../assets/play-shape-song.jpg"
  videoLink: string = "https://www.youtube.com/watch?v=AnS1vEmkQ9I"
}