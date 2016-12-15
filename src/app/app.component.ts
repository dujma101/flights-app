import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { CountriesComponent } from './airplanes/countries.component';
import { PlanesComponent } from './airplanes/planes.component';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
