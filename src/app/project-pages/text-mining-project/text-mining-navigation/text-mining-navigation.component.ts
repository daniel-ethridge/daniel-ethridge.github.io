import { Component } from '@angular/core';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
    selector: 'app-text-mining-navigation',
    templateUrl: './text-mining-navigation.component.html',
    styleUrls: ['./text-mining-navigation.component.scss'],
    standalone: false
})
export class TextMiningNavigationComponent {
  routes: ClassRoutes = new ClassRoutes();

  tmIntro: string = "/" + this.routes.tmIntroduction;
  tmData: string = "/" + this.routes.tmData;
  tmConclusions: string = "/" + this.routes.tmConclusions;
  tmArm: string = "/" + this.routes.tmArm;
  tmClustering: string = "/" + this.routes.tmClustering;
  tmDescTree: string = "/" + this.routes.tmDescTree;
  tmLda: string = "/" + this.routes.tmLda;
  tmNb: string = "/" + this.routes.tmNb;
  tmNn: string = "/" + this.routes.tmNn;
  tmSvm: string = "/" + this.routes.tmSvm;
}
