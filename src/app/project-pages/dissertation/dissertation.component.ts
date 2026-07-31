import { Component } from '@angular/core';
import { ClassRoutes } from 'src/app/_models/ClassRoutes';

@Component({
  selector: 'app-dissertation',
  templateUrl: './dissertation.component.html',
  styleUrl: './dissertation.component.css',
  standalone: false

})

export class DissertationComponent {
  classRoutes: ClassRoutes = new ClassRoutes();
}
