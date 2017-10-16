import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app',
  styleUrls: [ './app.scss'],
  templateUrl: 'app.pug',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
