import { Component } from '@angular/core';
import { Http }      from '@angular/http';

@Component({
  selector: 'services',
  styleUrls: [ 'services.scss'],
  templateUrl: 'services.pug'
})

export class ServicesComponent {
  private services: any = [];

  constructor(
    private http: Http
  ) {
    this.http.get('config/services.json').subscribe((response: any) => {
      this.services = JSON.parse(response._body);
    });
  }
}
