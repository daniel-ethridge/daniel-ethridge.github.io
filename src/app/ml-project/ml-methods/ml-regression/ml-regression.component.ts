import { Component } from '@angular/core';
import { MathScript } from '../../../_models/MathScript';

@Component({
  selector: 'app-ml-regression',
  templateUrl: './ml-regression.component.html',
  styleUrls: ['./ml-regression.component.css']
})
export class MlRegressionComponent {
  math: MathScript = new MathScript();
}
