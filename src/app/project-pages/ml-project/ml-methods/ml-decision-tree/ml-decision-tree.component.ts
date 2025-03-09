import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';
import { MathRenderer, MathService } from 'src/app/_services/math.service';

@Component({
    selector: 'app-ml-decision-tree',
    templateUrl: './ml-decision-tree.component.html',
    styleUrls: ['./ml-decision-tree.component.scss'],
    standalone: false
})
export class MlDecisionTreeComponent implements AfterViewInit{
  math: MathScript = new MathScript();
  ngAfterViewInit() {
      new MathRenderer(new MathService).render();
    }
}
