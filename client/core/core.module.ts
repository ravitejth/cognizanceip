import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http'
import { CommonModule }  from '@angular/common'

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent} from './expertise/expertise';
import { LabsComponent} from './labs/labs';
import { JamesComponent} from './james-watt/james-watt';
import { FaradayComponent} from './faraday/faraday';
import { AristotleComponent} from './aristotle/aristotle';

import { ContactComponent} from './contact/contact';
import {VideoDetailComponent} from './video-detail/video-detail.component';

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
      ExpertiseComponent,
      LabsComponent,
      ContactComponent,
      VideoDetailComponent,
      JamesComponent,
      FaradayComponent,
      AristotleComponent
    ],
    declarations: [
      AboutComponent,
      HomeComponent,
      ExpertiseComponent,
      LabsComponent,
      ContactComponent,
      VideoDetailComponent,
      JamesComponent,
      FaradayComponent,
      AristotleComponent
    ],
})
export class CoreModule { }
