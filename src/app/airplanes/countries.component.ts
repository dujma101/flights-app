import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  
})
export class CountriesComponent implements OnInit {

  constructor(private data1:DataService) { }

  ngOnInit() {
  }

}
