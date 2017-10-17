import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

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
  },
    {
    path: 'novelty-search',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: NoveltyComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'invalidity-search',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: InvalidityComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'freedom-to-operate',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: FreedomComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'patent-landscape',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: PatentComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'infringement-analysis',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: InfringementComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'evidence-of-use',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: EvidenceComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'prior-art-search',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: PriorComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'news',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: NewsComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'brochures',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: BrochuresComponent
      }, {
        path: '',
        component: FooterComponent,
        outlet: 'Footer',
      },
    ]
  },
    {
    path: 'case-studies',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'Header',
      }, {
        path: '',
        component: CasesComponent
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
