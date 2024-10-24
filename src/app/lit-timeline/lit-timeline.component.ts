import { Component } from '@angular/core';
import { Literature } from '../_models/Literature';
import { Title } from '@angular/platform-browser';
import { LiteratureService } from '../_services/literature.service';

@Component({
  selector: 'app-lit-timeline',
  templateUrl: './lit-timeline.component.html',
  styleUrls: ['./lit-timeline.component.css']
})


export class LitTimelineComponent {

  literature = {} as Literature[];
  alignside: string = "right";
  years: number[] = [];
  ids: number[] = [];
  tags: string[] = [];
  twoDTags: string[][] = [];
  tagCheck: Map<string, boolean> = new Map();
  isCollapsed: boolean = true;
  numTagsPerColumns: number = 4;

  constructor(private titleService: Title, private literatureService: LiteratureService) {
    this.titleService.setTitle("Daniel Ethridge | Literature Timeline")
  }

  ngOnInit(): void {
    this.literature = this.literatureService.getLiterature().reverse();
    
    this.setThisIds();
    this.literature.forEach( (element) => {
      element.tags?.forEach( (tag) => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      })
    })

    let subTagArr: string[] = [];
    for (let i = 0; i < this.tags.length; i++) {
      subTagArr.push(this.tags[i]);
      if (i % this.numTagsPerColumns == 0) {
        this.twoDTags.push(subTagArr);
        subTagArr = [];
      }
    }

    this.tags.forEach( (tag) => {
      this.tagCheck.set(tag, false);
    })


  }

  filterTags(tag: string) {
    let currentVal = this.tagCheck.get(tag);
    this.tagCheck.set(tag, !currentVal);

    let checked_tags: string[] = []
    this.tagCheck.forEach((value, key) => {
      if (value) {
        checked_tags.push(key);
      }
    })

    this.literature = this.literatureService.getLiterature().reverse();
    if (checked_tags.length == 0) {
      this.setThisIds();
      return
    }
    
    let subset_literature: Literature[] = [];
    this.literature.forEach( (lit) => {
      let added: boolean = false;
      lit.tags?.forEach( (tag) => {
        if ((checked_tags.includes(tag)) && (!added)) {
          added = true;
          subset_literature.push(lit);
        }
      })
    })

    this.literature = subset_literature;
    this.setThisIds();
  }

  setThisIds() {
    this.ids = [];
    this.years = [];
    this.literature.forEach( (element) => {
      if (!this.years.includes(element.year)) {
        this.years.push(element.year);
        if (element.id) {
          this.ids.push(element.id);
        }
      }
    })
  }

  writeYear(id: number) {
    return this.ids.includes(id);
  }

  printList(arg?: string[]) {
    if (arg) {
      if (arg.length > 0) {
        return true;
      }
    }

    return false;
  }

  alignSide() {
    this.alignside = this.alignside == "left" ? "right" : "left";
    return this.alignside;
  }

  alignDot() {
    return "dot" + this.alignside;
  }

  monthMap(month: number | undefined){
    switch (month) {
      case 1:
        return ", January"
      case 2: 
        return ", February"
      case 3:
        return ", March"
      case 4: 
        return ", April"
      case 5: 
        return ", May"
      case 6:      
        return ", June"  
      case 7:       
        return ", July" 
      case 8:        
        return ", August"
      case 9:
        return ", September"
      case 10:
        return ", October"
      case 11:
        return ", November"
      case 12:
        return ", December"
      default:
        return ""
    }
  }

}
