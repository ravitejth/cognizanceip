import { Component } from '@angular/core';

@Component({
  selector: 'career',
  styleUrls: ['career.scss'],
  templateUrl: 'career.pug'
})

export class CareerComponent {
  private expanded1=false;
  private expanded2=false;
  private expanded3=false;

  isexpanded1(){
    this.expanded1 = !this.expanded1;
  }
  isexpanded2(){
    this.expanded2 = !this.expanded2;
  }
  isexpanded3(){
    this.expanded3 = !this.expanded3;
  }
}
