import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'footer',
    styleUrls: [ 'footer.scss'],
    templateUrl: 'footer.pug'
})
export class FooterComponent  {

  name = 'footer';
  constructor(private elementRef:ElementRef) {};
  ngAfterViewInit() {
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//platform.twitter.com/widgets.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
