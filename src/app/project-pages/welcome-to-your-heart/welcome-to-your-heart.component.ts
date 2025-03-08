import { Component } from '@angular/core';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-welcome-to-your-heart',
  templateUrl: './welcome-to-your-heart.component.html',
  styleUrls: ['./welcome-to-your-heart.component.scss']
})
export class WelcomeToYourHeartComponent {

  project = {} as Project;

  constructor(private ps: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.ps.getProjectById(5);
  }
}
