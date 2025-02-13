import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../_models/Project';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css']
})
export class HomeComponent {

  featuredProject = {} as Project;

  // Angular service
  constructor(private titleService: Title) {
    this.titleService.setTitle("Daniel Ethridge | Home");
  }

  profilePhoto: string = "../../../assets/profile-photo-cropped.jpg"

  async uploadTestFile() {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, 'test.txt');
      
      const response = await fetch('/assets/test.txt');
      const blob = await response.blob();
      
      const result = await uploadBytes(storageRef, blob);
      console.log('File uploaded successfully', result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
}
