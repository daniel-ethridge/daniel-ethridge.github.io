import { Component } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';

@Component({
  selector: 'app-ml-support-vector',
  templateUrl: './ml-support-vector.component.html',
  styleUrls: ['./ml-support-vector.component.css']
})
export class MlSupportVectorComponent {
  math: MathScript = new MathScript();
}
