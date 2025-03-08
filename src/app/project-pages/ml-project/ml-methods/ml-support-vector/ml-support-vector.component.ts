import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';
import { MathRenderer, MathService } from 'src/app/_services/math.service';

@Component({
  selector: 'app-ml-support-vector',
  templateUrl: './ml-support-vector.component.html',
  styleUrls: ['./ml-support-vector.component.scss']
})
export class MlSupportVectorComponent implements AfterViewInit{
  math: MathScript = new MathScript();

  ngAfterViewInit() {
      new MathRenderer(new MathService).render();
    }
}
