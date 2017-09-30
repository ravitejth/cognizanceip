import { Injectable } from '@angular/core';
import { keyBy } from 'lodash';

// INJECTION
@Injectable()

// SERVICE EXPORT
export class VideosService {

  private videos = [
      {
        "id": 1,
        "category": "popular",
        "name": "Digital Portfolio",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/jGow4nmYkkA",
        "description": "A excellent portfolio is the simplest way to showcase your talent."
      },
      {
        "id": 2,
        "category": "recent",
        "name": "Free Photoshoot",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/pS-gbqbVd8c",
        "description": "A camera is save button for the mind’s eye.’ A single good photo can give away."
      },
      {
        "id": 3,
        "category": "featured",
        "name": "Showreel",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/CC5ca6Hsb2Q",
        "description": "Crisp Creative and a Capturing introductory video about your work and experience."
      },
      {
        "id": 4,
        "category": "popular",
        "name": "Content on Demand",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/qtD1IpH5a5Q",
        "description": "We have minds that can process your need. Delivering content faster than you imagine."
      },
      {
        "id": 5,
        "category": "popular",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 6,
        "category": "popular",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/jJHpK0EQ93A",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 7,
        "category": "recent",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/mMfxI3r_LyA",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 8,
        "category": "recent",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/ymNFyxvIdaM",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 9,
        "category": "recent",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 10,
        "category": "featured",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 11,
        "category": "featured",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 12,
        "category": "featured",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 13,
        "category": "popular",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      },
      {
        "id": 14,
        "category": "featured",
        "name": "Workshops",
        "image": "img/services/postman.png",
        "url": "https://www.youtube.com/embed/e8PS1UaBHgQ",
        "description": "A team to push you to your limits till you reach your goal. For we don’t just present you."
      }
  ];

  get() {
    return this.videos;
  }

  getbyId(id){
    const videoMap = keyBy(this.videos, 'id');
    return videoMap[id] || {};
  }
}
