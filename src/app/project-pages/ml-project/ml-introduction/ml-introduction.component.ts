import { Component } from '@angular/core';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
    selector: 'app-ml-introduction',
    templateUrl: './ml-introduction.component.html',
    styleUrls: ['./ml-introduction.component.scss'],
    standalone: false
})


export class MlIntroductionComponent {
  pageRoute: string = new ClassRoutes().mlIntroduction;
}
