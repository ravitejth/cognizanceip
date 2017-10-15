import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ServicesComponent} from "./services/services";
import {VideosComponent} from "./videos/videos";
import {ContactComponent} from "./contact/contact";
import {VideoDetailComponent} from "./video-detail/video-detail.component";
import {DisclaimerComponent} from "./disclaimer/disclaimer";
import {PrivacyComponent} from "./privacy/privacy";
import {TermsComponent} from "./terms/terms";


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
        path: 'services',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: ServicesComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    },
    {
        path: 'videos',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: VideosComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    },
    {
      path: 'video-detail',
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
      path: 'disclaimer',
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'Header',
        }, {
          path: '',
          component: DisclaimerComponent
        }, {
          path: '',
          component: FooterComponent,
          outlet: 'Footer',
        },
      ]
    },
    {
    path: 'privacy',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: PrivacyComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'terms',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: TermsComponent
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
