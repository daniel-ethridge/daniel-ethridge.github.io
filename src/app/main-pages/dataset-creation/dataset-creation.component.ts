import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dataset-creation',
  templateUrl: './dataset-creation.component.html',
  styleUrls: ['./dataset-creation.component.css'],
  standalone: false
})
export class DatasetCreationComponent {

  songOpened: boolean = false;
  singleSong: boolean = false;
  stage: number = 2;

  // Add properties for form data
  songTitle!: string;
  songName!: string;
  songStartMin!: number;
  songStartSec!: number;
  songEndMin!: number;
  songEndSec!: number;
  chorusStartMin!: number;
  chorusStartSec!: number;
  chorusEndMin!: number;
  chorusEndSec!: number;


  saveStageTwoData(
    title: string,
    songName: string,
    songStartMin: number,
    songStartSec: number,
    songEndMin: number,
    songEndSec: number,
    chorusStartMin: number,
    chorusStartSec: number,
    chorusEndMin: number,
    chorusEndSec: number
  ) {
    // Now you can use the values
    this.songTitle = title;
    this.songName = songName;
    this.songStartMin = songStartMin;
    this.songStartSec = songStartSec;
    this.songEndMin = songEndMin;
    this.songEndSec = songEndSec;
    this.chorusStartMin = chorusStartMin;
    this.chorusStartSec = chorusStartSec;
    this.chorusEndMin = chorusEndMin;
    this.chorusEndSec = chorusEndSec;

    this.logAllVariables();
  }

  logAllVariables() {
    console.log({
      songOpened: this.songOpened,
      singleSong: this.singleSong,
      stage: this.stage,
      songTitle: this.songTitle,
      songName: this.songName,
      songStartMin: this.songStartMin,
      songStartSec: this.songStartSec,
      songEndMin: this.songEndMin,
      songEndSec: this.songEndSec,
      chorusStartMin: this.chorusStartMin,
      chorusStartSec: this.chorusStartSec,
      chorusEndMin: this.chorusEndMin,
      chorusEndSec: this.chorusEndSec
    });
  }
}
