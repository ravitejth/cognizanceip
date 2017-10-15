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
      title: "Team",
      link: "/about"
    },
    {
      title: "Expertise",
      link: "/services"
    },
    {
      title: "Resources",
      link: "/videos"
    },
    {
      title: "Career",
      link: "/video-detail"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ]
}
