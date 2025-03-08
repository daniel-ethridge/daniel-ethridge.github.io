import { Component } from '@angular/core';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
  selector: 'app-ml-data-prep-eda',
  templateUrl: './ml-data-prep-eda.component.html',
  styleUrls: ['./ml-data-prep-eda.component.scss']
})
export class MlDataPrepEdaComponent {
  pageRoute = new ClassRoutes().mlEda;
}
