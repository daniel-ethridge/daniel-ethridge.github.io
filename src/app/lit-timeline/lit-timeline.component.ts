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

  constructor(private titleService: Title, private literatureService: LiteratureService) {
    this.titleService.setTitle("Daniel Ethridge | Literature Timeline")
  }

  ngOnInit(): void {
    this.literature = this.literatureService.getLiterature();
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
