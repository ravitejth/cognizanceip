import { Component } from '@angular/core';
import { VideosService } from "../../services/videos.service";

@Component({
  selector: 'videos',
  styleUrls: [ 'videos.scss'],
  templateUrl: 'videos.pug'
})

export class VideosComponent {
  private videos_list: any = [];

  constructor(
    private videosService: VideosService
  ) {
    this.videos_list = videosService.get();
  }
}
