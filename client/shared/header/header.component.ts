import { Component } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: [ 'header.scss'],
  templateUrl: 'header.pug'
})

export class HeaderComponent {
  menu = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "About Us",
      link: "/about"
    },
    {
      title: "Services",
      link: "/services"
    },
    {
      title: "Videos",
      link: "/videos"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ]
}
