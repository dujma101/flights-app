import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class DataService {

   data: {};
  totalPlanes: number;
  airBorne;
  grounded;
  count;
  states2;
  constructor(public http: Http) { }

  request(): void {
    this.http.request('https://opensky-network.org/api/states/all')
      .subscribe((res: Response) => {
        this.data = res.json();
       
        this.totalPlanes = res.json().states.length;

        var air1 = 0;
        res.json().states.forEach(function (item) {

          if (item[8] === false) {
            air1 = air1 + 1;
          }
          return air1;
        }

        )
        this.airBorne = air1;
        this.grounded = this.totalPlanes - this.airBorne;
        console.log(this.totalPlanes);
        // state origin
        
        
        var c = [];
res.json().states.forEach(function (params) {
   
  c.push(params[2]);

    }
  
)
   console.log(c);

this.count = function(ary, classifier) {
    return ary.reduce(function(counter, item) {
        var p = (classifier || String)(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
   }
this.states2 = this.count(c);
   console.log(this.states2);

          // ================         

        
      }
      )
  }

}
