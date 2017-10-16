import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ExpertiseComponent} from './expertise/expertise';
import { LabsComponent} from './labs/labs';
import { JamesComponent} from './james-watt/james-watt';
import { FaradayComponent} from './faraday/faraday';
import { AristotleComponent} from './aristotle/aristotle';

import { ContactComponent} from './contact/contact';
import {VideoDetailComponent} from './video-detail/video-detail.component';


// Route Configuration
export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'Header',
        }, {
          path: '',
          component: HomeComponent
        }, {
          path: '',
          component: FooterComponent,
          outlet: 'Footer',
        },
      ]
    },
    {
        path: 'about',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: AboutComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    },
    {
        path: 'expertise',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: ExpertiseComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    },
    {
        path: 'labs',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: LabsComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    },
    {
      path: 'resources',
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'Header',
        }, {
          path: '',
          component: VideoDetailComponent
        }, {
          path: '',
          component: FooterComponent,
          outlet: 'Footer',
        },
      ]
    },
    {
        path: 'contact',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: ContactComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    },
    {
      path: 'james-watt-lab',
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'Header',
        }, {
          path: '',
          component: JamesComponent
        }, {
          path: '',
          component: FooterComponent,
          outlet: 'Footer',
        },
      ]
    },
    {
    path: 'faraday-lab',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: FaradayComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'aristotle-lab',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: AristotleComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoreRoutingModule {}
