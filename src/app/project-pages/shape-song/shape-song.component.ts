import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
    selector: 'app-magnebacus',
    templateUrl: './shape-song.component.html',
    styleUrls: ['./shape-song.component.scss'],
    standalone: false
})

export class ShapeSongComponent implements OnInit {

  project = {} as Project;
  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(4);
  }
}