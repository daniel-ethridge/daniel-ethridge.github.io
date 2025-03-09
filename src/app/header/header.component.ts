import { Component, Injectable, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})

@Injectable({
  providedIn: 'root'
})

export class HeaderComponent implements OnInit {

  bannerColor: CSSStyleValue = "";

  setColorStr(newColor: CSSStyleValue) : void {
    this.bannerColor = newColor;
  }

  ngOnInit(): void {
    this.bannerColor = "lightgrey";
  }
}
