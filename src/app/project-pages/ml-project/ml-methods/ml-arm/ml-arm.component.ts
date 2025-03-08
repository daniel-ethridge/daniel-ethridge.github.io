import { Component, AfterViewInit } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';
import { MathRenderer, MathService } from 'src/app/_services/math.service';

@Component({
  selector: 'app-ml-arm',
  templateUrl: './ml-arm.component.html',
  styleUrls: ['./ml-arm.component.scss']
})
export class MlArmComponent implements AfterViewInit {
  math: MathScript = new MathScript();

  ngAfterViewInit() {
    new MathRenderer(new MathService).render();
  }
}
