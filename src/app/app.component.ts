import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  totalPlanes: number;
  air;
  ground;
  constructor(public http: Http) { }

  request(): void {
    this.http.request('https://opensky-network.org/api/states/all')
      .subscribe((res: Response) => {
        this.totalPlanes = res.json().states.length;

      })
  }

}
