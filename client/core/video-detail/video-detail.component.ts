import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { VideosService } from "../../services/videos.service";
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'video-detail',
  styleUrls: [ './video-detail.scss'],
  templateUrl: './video-detail.pug'
})
export class VideoDetailComponent {
  name = 'video-detail';
  private video;
  private url;

  constructor(private http: Http,
              private videosService: VideosService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router: Router) {
    {
      // fetch video from VideosService
      this.activatedRoute.params.subscribe((params: Params) => {
        this.video = videosService.getbyId(params['id']);
        console.log(this.video);

        if(!this.video.id){
          console.log('video not found');
          this.router.navigate(['./404']);
        }

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
      });
      // this.sanitizer = sanitizer;
    }
  }
}
