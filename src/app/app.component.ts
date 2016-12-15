import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { CountriesComponent } from './airplanes/countries.component';
import { PlanesComponent } from './airplanes/planes.component';
import { DataService } from './data.service';


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
  
})

  // implements oninit? 
export class AppComponent {

  constructor(private data: DataService) {} 

    request() {
      
      this.data.request();
   }


}
