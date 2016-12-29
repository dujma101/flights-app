import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';
import { CountriesComponent } from './airplanes/countries.component';
import { PlanesComponent } from './airplanes/planes.component';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(private data1: DataService) { }
  id;
  ngOnInit() {
    this.data1.request();
    // this.id = setInterval(() => {
    //   this.data1.request();
    // }, 4000);
  }
   



  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}