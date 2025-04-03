import { Component } from '@angular/core';
import { MathScript } from '../../../../_models/MathScript';
import { MathRenderer, MathService } from 'src/app/_services/math.service';
import { AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-ml-regression',
    templateUrl: './ml-regression.component.html',
    styleUrls: ['./ml-regression.component.scss'],
    standalone: false
})
export class MlRegressionComponent implements AfterViewInit{
  math: MathScript = new MathScript();

  ngAfterViewInit() {
      new MathRenderer(new MathService).render();
    }
}
