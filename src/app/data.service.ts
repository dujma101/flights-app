import {Injectable} from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  data;
  totalPlanes: number;
  airBorne;
  grounded;
  count;
  states2;
  ascending;
  descending;
  sortedArr;

  constructor(public http: Http) { }

  request(): void {
    this.http.get('https://opensky-network.org/api/states/all')
      .map((res:Response) => res.json())
      .subscribe((res: Response) => {
        this.data = res;

        this.totalPlanes = this.data.states.length;


         var asc = 0,
          desc = 0;
var countedByState = [];
var air1 = 0;
        this.data.states.forEach(function (item) {

            if (item[8] === false) {
              air1 = air1 + 1;
          }
          
   if (item[11] > 0) {
            asc += 1;
          } else if (item[11] < 0) {
            desc += 1;
            }
         countedByState.push(item[2]);  
          })
        this.airBorne = air1;
        this.grounded = this.totalPlanes - this.airBorne;



        this.ascending = asc;
        this.descending = desc;

        // state origin
        
       
          // console.log(countedByState);

        this.count = function (ary, classifier) {
          return ary.reduce(function (counter, item) {
            var p = (classifier || String)(item);
            counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
            return counter;
          }, {})
        }
        this.states2 = this.count(countedByState);

this.sortedArr = [];
          for (let key in this.states2) {
            this.sortedArr.push({ state: key, nFlights: this.states2[key] });
          }
        this.sortedArr.sort(function (a, b)
        { return (b.nFlights > a.nFlights) ? 1 : ((a.nFlights > b.nFlights) ? -1 : 0); }); 


      })
  }

}
