import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';

//COMPONENTS
import { HeaderComponent }    from './header/header.component'
import { FooterComponent }    from './footer/footer.component';
import { NotFoundComponent }  from './not-found/not-found.component';
import {TopBarComponent}      from "./top-bar/top-bar.component";
import {SocialComponent}      from "./social/social.section";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    TopBarComponent,
    SocialComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    TopBarComponent,
    SocialComponent
  ],
})
export class SharedModule { }
