import { Component } from '@angular/core';
import { MathScript } from '../../../_models/MathScript';

@Component({
  selector: 'app-ml-arm',
  templateUrl: './ml-arm.component.html',
  styleUrls: ['./ml-arm.component.css']
})
export class MlArmComponent {
  math: MathScript = new MathScript();
}
