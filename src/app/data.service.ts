import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';


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


  constructor(public http: Http) {}

  request(): void {
    this.http.request('https://opensky-network.org/api/states/all')
      .subscribe((res: Response) => {
        this.data = res.json();

        this.totalPlanes = this.data.states.length;

        var air1 = 0;
        this.data.states.forEach(function (item) {

            if (item[8] === false) {
              air1 = air1 + 1;
            }
          }

        )
        this.airBorne = air1;
        this.grounded = this.totalPlanes - this.airBorne;
        // console.log(this.totalPlanes);


         var asc = 0,
          desc = 0;


        this.data.states.forEach(function (item) {

          if (item[11] > 0) {
            asc += 1;
          } else if (item[11] < 0) {
            desc += 1;
          }

         })
        
        this.ascending = asc;
        this.descending = desc;

        // console.log(ascending);

        // state origin
        var countedByState = [];
        this.data.states.forEach(function (params) {

              countedByState.push(params[2]);

            }

          )
          // console.log(countedByState);

        this.count = function (ary, classifier) {
          return ary.reduce(function (counter, item) {
            var p = (classifier || String)(item);
            counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
            return counter;
          }, {})
        }
        this.states2 = this.count(countedByState);
        // console.log(this.states2);
        // ================         

      })
  }

}
