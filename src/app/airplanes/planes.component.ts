import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
})
export class PlanesComponent implements OnInit {
 
  
  constructor(private data1: DataService) { }

  ngOnInit() {
   }
}
