import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/count';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  totalPlanes: number;
  air;
  air1;
  ground;
  constructor(public http: Http) { }

  request(): void {
    this.http.request('https://opensky-network.org/api/states/all')
      .subscribe((res: Response) => {
        this.totalPlanes = res.json().states.length;
        
        var air1 = 0;
        res.json().states.forEach(function (item) {
        
          if (item[8] === false) {
            air1 = air1+1;
              }
          return air1;
       }
          
        )
        console.log(air1);
        this.air = air1;
          console.log(this.air);
      })
  }
}
