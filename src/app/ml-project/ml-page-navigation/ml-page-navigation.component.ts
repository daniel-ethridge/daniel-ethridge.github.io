import { Component } from '@angular/core';

@Component({
  selector: 'app-ml-page-navigation',
  templateUrl: './ml-page-navigation.component.html',
  styleUrls: ['./ml-page-navigation.component.css']
})

export class MlPageNavigationComponent {

  testbool: boolean;

  constructor() {
    this.testbool = true;
  }
}