import { Component } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';
import { AfterViewInit } from '@angular/core';
import { MathRenderer, MathService } from 'src/app/_services/math.service';

@Component({
    selector: 'app-ml-naive-bayes',
    templateUrl: './ml-naive-bayes.component.html',
    styleUrls: ['./ml-naive-bayes.component.scss'],
    standalone: false
})
export class MlNaiveBayesComponent implements AfterViewInit {
  math: MathScript = new MathScript();

  ngAfterViewInit() {
      new MathRenderer(new MathService).render();
    }
}
