import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Citation } from '../_models/Citation';

@Injectable({
  providedIn: 'root'
})

export class CitationsService {
  private citations = new BehaviorSubject<Citation[]>([]);
  citations$ = this.citations.asObservable();
  private currentId = 1;

  getNextId(): number {
    return this.currentId++;
  }

  findCitationById(citationId: string): Citation | undefined {
    return this.citations.getValue().find(c => c.citationId === citationId);
  }

  addCitation(citation: Citation) {
    const current = this.citations.getValue();
    if (citation.citationId) {
      const existing = current.find(c => c.citationId === citation.citationId);
      if (existing) {
        return existing.id; // Return existing citation number
      }
    }
    this.citations.next([...current, citation]);
    return citation.id;
  }
}