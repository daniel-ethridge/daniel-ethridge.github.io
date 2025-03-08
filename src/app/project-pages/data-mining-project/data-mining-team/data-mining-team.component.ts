import { Component } from '@angular/core';

@Component({
  selector: 'app-data-mining-team',
  templateUrl: './data-mining-team.component.html',
  styleUrls: ['./data-mining-team.component.scss']
})
export class DataMiningTeamComponent {
  atharvaPhoto: string = "../../../assets/data-mining-assets/team/atharva-photo.jpg";
  atharvaLinkedin: string = "http://www.linkedin.com/in/atharva-patil-714b77222";
  atharvaGithub: string = "https://github.com/Atharva309";

  danielPhoto: string = "../../../assets/profile-photo-cropped.jpg"
  danielLinkedin: string = "https://www.linkedin.com/in/daniel-ethridge1/";
  danielGithub: string = "https://github.com/daniel-ethridge";

  deepPhoto: string = "../../../assets/data-mining-assets/team/deep-cropped.png";
  deepGithub: string = "https://github.com/623dks";
  deepLinkedin: string = "https://www.linkedin.com/in/deep-shukla-b4035220a/";

  sujithPhoto: string = "../../../assets/data-mining-assets/team/sujith-photo.jpeg";
  sujithGithub: string = "https://github.com/larry6683";
  sujithLinkedin: string = "https://www.linkedin.com/in/battu-sujith/";

  linkedinIcon: string = "../../../assets/linkedin-logo.png";
  githubIcon: string = "../../../assets/github-logo.jpeg";
}
