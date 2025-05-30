import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
    selector: 'app-gtri',
    templateUrl: './gtri.component.html',
    styleUrls: ['./gtri.component.scss'],
    standalone: false
})

export class GtriComponent implements OnInit {

  project = {} as Project;
  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(3);
  }

  gtriLink: string = "https://gtri.gatech.edu/about"
}
