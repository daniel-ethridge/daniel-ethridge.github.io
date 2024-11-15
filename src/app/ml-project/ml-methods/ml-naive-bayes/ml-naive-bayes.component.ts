import { Component } from '@angular/core';
import { MathScript } from '../../../_models/MathScript';

@Component({
  selector: 'app-ml-naive-bayes',
  templateUrl: './ml-naive-bayes.component.html',
  styleUrls: ['./ml-naive-bayes.component.css']
})
export class MlNaiveBayesComponent {
  math: MathScript = new MathScript();
}
