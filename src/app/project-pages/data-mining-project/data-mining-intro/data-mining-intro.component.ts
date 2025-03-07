import { Component } from '@angular/core';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
  selector: 'app-data-mining-intro',
  templateUrl: './data-mining-intro.component.html',
  styleUrls: ['./data-mining-intro.component.css']
})
export class DataMiningIntroComponent {

  pageRoute: string = new ClassRoutes().dmIntroduction;

}
