import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http'
import { CommonModule }  from '@angular/common'

//COMPONENTS
import { HomeComponent }    from './home/home.component';
import { InvalidityComponent }     from './home/invalidity/invalidity.component';
import { MainComponent }    from './home/main/main';
import { TestimonialsComponent }     from './home/testimonials/testimonials.component';
import { AboutComponent }   from './about/about.component';
import { DisclaimerComponent }   from './disclaimer/disclaimer';
import {ServicesComponent}  from "./services/services";
import {VideosComponent}    from "./videos/videos";
import {ContactComponent}   from "./contact/contact";
import {VideoDetailComponent} from "./video-detail/video-detail.component";
import {TermsComponent}       from "./terms/terms";
import {PrivacyComponent}     from "./privacy/privacy";

// ROUTING
import { CoreRoutingModule } from './core-routing.module';

// SHARED MODULE
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap';



@NgModule({
    imports: [
      CommonModule,
      HttpModule,
      CoreRoutingModule,
      SharedModule,
      CarouselModule.forRoot()
    ],
    exports: [
      AboutComponent,
      HomeComponent,
      InvalidityComponent,
      MainComponent,
      TestimonialsComponent,
      ServicesComponent,
      VideosComponent,
      ContactComponent,
      VideoDetailComponent,
      DisclaimerComponent,
      PrivacyComponent,
      TermsComponent
    ],
    declarations: [
      AboutComponent,
      HomeComponent,
      InvalidityComponent,
      MainComponent,
      TestimonialsComponent,
      ServicesComponent,
      VideosComponent,
      ContactComponent,
      VideoDetailComponent,
      DisclaimerComponent,
      PrivacyComponent,
      TermsComponent
    ],
})
export class CoreModule { }
