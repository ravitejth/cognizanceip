import { Component } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: [ 'header.scss'],
  templateUrl: 'header.pug'
})

export class HeaderComponent {
  menu = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Expertise',
      link: '/expertise'
    },
    {
      title: 'Labs',
      link: '/labs'
    },
    {
      title: 'Resources',
      link: '/resources'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]
}
