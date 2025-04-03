import { Component } from '@angular/core';
import { CitationsService } from '../_services/citations.service';

@Component({
    selector: 'app-footnotes',
    templateUrl: './footnotes.component.html',
    styleUrls: ['./footnotes.component.scss'],
    standalone: false
})

export class FootnotesComponent {
  citations$ = this.citationsService.citations$;
  
  constructor(private citationsService: CitationsService) {}
}
