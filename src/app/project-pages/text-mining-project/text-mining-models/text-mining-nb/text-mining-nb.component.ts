import { AfterViewInit, Component } from '@angular/core';
import { MathScript } from 'src/app/_models/MathScript';
import { MathRenderer, MathService } from 'src/app/_services/math.service';

@Component({
    selector: 'app-text-mining-nb',
    templateUrl: './text-mining-nb.component.html',
    styleUrls: ['./text-mining-nb.component.scss'],
    standalone: false
})
export class TextMiningNbComponent implements AfterViewInit{

      math: MathScript = new MathScript();
    
      ngAfterViewInit() {
          new MathRenderer(new MathService).render();
        }
}
