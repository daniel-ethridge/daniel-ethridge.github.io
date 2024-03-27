import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-magnebacus',
  templateUrl: './magnebacus.component.html',
  styleUrls: ['./magnebacus.component.css', './../../app.component.css']
})

export class MagnebacusComponent implements OnInit {

  project = {} as Project;
  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(1);
  }

  videoLink: string = "https://www.youtube.com/watch?v=PeHwQo6eCUo";
  videoPictureLink: string = "../../../assets/play-magnebacus.jpg";
  projectPoster: string = "../../assets/poster-magnebacus.jpg";
  pictures: string[] = [];
}
