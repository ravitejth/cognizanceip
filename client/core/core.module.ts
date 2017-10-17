import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http'
import { CommonModule }  from '@angular/common'

// COMPONENTS
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ExpertiseComponent}    from './expertise/expertise';
import { NoveltyComponent}      from './novelty/novelty';
import { InvalidityComponent}   from './invalidity/invalidity';
import { FreedomComponent}      from './freedom/freedom';
import { PatentComponent}       from './patent/patent';
import { InfringementComponent} from './infringement/infringement';
import { EvidenceComponent}     from './evidence/evidence';
import { PriorComponent}        from './prior/prior';

import { LabsComponent}       from './labs/labs';
import { JamesComponent}      from './james-watt/james-watt';
import { FaradayComponent}    from './faraday/faraday';
import { AristotleComponent}  from './aristotle/aristotle';

import { NewsComponent}       from './news/news';
import { BrochuresComponent}  from './brochures/brochures';
import { CasesComponent}      from './case-studies/case-studies';

import { ContactComponent}    from './contact/contact';
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
      AristotleComponent,
      NoveltyComponent,
      InvalidityComponent,
      FreedomComponent,
      PatentComponent,
      InfringementComponent,
      EvidenceComponent,
      PriorComponent,
      NewsComponent,
      BrochuresComponent,
      CasesComponent
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
      AristotleComponent,
      NoveltyComponent,
      InvalidityComponent,
      FreedomComponent,
      PatentComponent,
      InfringementComponent,
      EvidenceComponent,
      PriorComponent,
      NewsComponent,
      BrochuresComponent,
      CasesComponent
    ],
})
export class CoreModule { }
