import { Component }      from '@angular/core';
import { Http }           from '@angular/http';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'testimonials',
  styleUrls: [ 'testimonials.scss'],
  templateUrl: 'testimonials.pug',
  providers: [{
    provide: CarouselConfig,
    useValue: {
      interval: 4000, // slider changes after 4 seconds
      noPause: true
    }
  }]
})

export class TestimonialsComponent {

  private showTestimonials: boolean;
  private testimonials: any = [];

  constructor(
    private http: Http
  ) {
    this.http.get('../config/testimonials.json').subscribe((response: any) => {
      this.testimonials = JSON.parse(response._body);
      this.showTestimonials = this.testimonials.length > 0;
    });
  }
}
