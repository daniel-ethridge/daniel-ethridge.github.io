import { Component } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';

@Component({
  selector: 'app-ml-decision-tree',
  templateUrl: './ml-decision-tree.component.html',
  styleUrls: ['./ml-decision-tree.component.css']
})
export class MlDecisionTreeComponent {
  math: MathScript = new MathScript();
}
