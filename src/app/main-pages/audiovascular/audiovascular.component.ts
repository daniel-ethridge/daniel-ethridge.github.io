import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header/header.component';


@Component({
  selector: 'app-audiovascular',
  templateUrl: './audiovascular.component.html',
  styleUrls: ['./audiovascular.component.css']
})
export class AudiovascularComponent implements OnInit{

  constructor(private header: HeaderComponent) {

  }

  setBannerColor() : void {
    this.header.setColorStr("red");
  }

  ngOnInit(): void {
    this.header.setColorStr("red");
  }

}
