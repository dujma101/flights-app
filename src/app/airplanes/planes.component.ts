import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  providers:[DataService]
})
export class PlanesComponent implements OnInit {
 
  
  constructor(private data: DataService) {} 
      @Input() totalPlanes;

  ngOnInit() {
      this.data.request();   
             
   }
      
    
   


}
