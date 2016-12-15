import { Component, OnInit ,Input,Inject} from '@angular/core';
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

export class AppComponent implements OnInit {
  constructor(private data: DataService) {} 

  // totalPlanes = this.data.totalPlanes;
    ngOnInit() {
      // this.data.request();
      
   }


}
