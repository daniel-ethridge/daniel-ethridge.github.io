import { Component } from '@angular/core';
import { FootnoteComponent } from "../../references/footnote/footnote.component";
import { ReferencesComponent } from "../../references/references/references.component";
import { ClassRoutes } from '../../_models/ClassRoutes';

@Component({
  selector: 'app-data-mining-conclusions',
  templateUrl: './data-mining-conclusions.component.html',
  styleUrls: ['./data-mining-conclusions.component.css']
})
export class DataMiningConclusionsComponent {
  pageRoute: string = new ClassRoutes().dmConclusion;
  referenceText: string = "We acknowledge and condemn Wagner's abhorent history of antisemitism and racism. It is undeniable, however, that his work and compositions have heavily influenced the musical landscape that we see today."
}
