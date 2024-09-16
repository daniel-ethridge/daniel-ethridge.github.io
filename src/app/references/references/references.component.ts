import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})

export class ReferencesComponent {
  @Input() pageRoute?: string;
  @Input() id?: number;

  @Input() referenceText?: string;
  @Input() referenceLink?: string;
}
