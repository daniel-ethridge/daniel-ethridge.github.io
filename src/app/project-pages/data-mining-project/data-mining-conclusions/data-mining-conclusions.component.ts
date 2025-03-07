import { Component } from '@angular/core';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
  selector: 'app-data-mining-conclusions',
  templateUrl: './data-mining-conclusions.component.html',
  styleUrls: ['./data-mining-conclusions.component.css']
})
export class DataMiningConclusionsComponent {
  pageRoute: string = new ClassRoutes().dmConclusion;
}
