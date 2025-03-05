import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-audio-physio-corr',
  templateUrl: './audio-physio-corr.component.html',
  styleUrls: ['./audio-physio-corr.component.css', '../../styles/styles.css']
})

export class AudioPhysioCorrComponent implements OnInit {

  project = {} as Project;
  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(6);
  }

  audiomostlyLink: string = "https://www.audiomostly.com"
}


