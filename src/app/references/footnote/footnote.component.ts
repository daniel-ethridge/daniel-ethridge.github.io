import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footnote',
  templateUrl: './footnote.component.html',
  styleUrls: ['./footnote.component.css']
})

export class FootnoteComponent {
  @Input() pageRoute?: string;
  @Input() id?: number;
}
