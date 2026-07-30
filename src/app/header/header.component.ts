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

export class HeaderComponent {

  // private readonly storageKey = 'simpleBackground';
  // simpleBackground = false;

  // ngOnInit(): void {
  //   if (typeof window !== 'undefined') {
  //     this.simpleBackground = window.localStorage.getItem(this.storageKey) === 'true';
  //   }
  // }

  // setColorStr(simpleBkgnd: boolean): void {
  //   this.simpleBackground = simpleBkgnd;

  //   if (typeof window !== 'undefined') {
  //     window.localStorage.setItem(this.storageKey, String(simpleBkgnd));
  //   }
  // }

}
