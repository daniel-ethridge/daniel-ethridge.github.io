import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { CitationsService } from '../_services/citations.service';

@Directive({
    selector: '[citation]',
    standalone: false
})
export class CiteDirective implements OnInit {
  @Input() href: string = '';
  @Input('citation') linkText: string = '';
  @Input() citationId: string = '';
  
  constructor(
    private el: ElementRef,
    private citationsService: CitationsService
  ) {}

  ngOnInit() {
    let existingCitation;
    if (this.citationId) {
      existingCitation = this.citationsService.findCitationById(this.citationId);
    }

    if (existingCitation) {
      // Just add the superscript number for existing citation
      const sup = document.createElement('sup');
      sup.textContent = `[${existingCitation.id}]`;
      sup.style.cursor = 'pointer';
      sup.onclick = () => {
        document.getElementById(existingCitation!.referenceId)?.scrollIntoView({ behavior: 'smooth' });
      };
      this.el.nativeElement.appendChild(sup);
    } else {
      // Create new citation
      const text = this.el.nativeElement.textContent;
      const citation = {
        id: this.citationsService.getNextId(),
        text: text,
        url: this.href,
        referenceId: `citation-${Date.now()}`,
        linkText: this.linkText || this.href,
        citationId: this.citationId
      };

      // Add superscript footnote number
      const sup = document.createElement('sup');
      sup.textContent = `[${citation.id}]`;
      sup.style.cursor = 'pointer';
      sup.onclick = () => {
        document.getElementById(citation.referenceId)?.scrollIntoView({ behavior: 'smooth' });
      };
      this.el.nativeElement.appendChild(sup);

      this.citationsService.addCitation(citation);
    }
  }
}