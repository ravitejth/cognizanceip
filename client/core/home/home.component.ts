import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
    selector: 'home',
    styleUrls: [ 'home.scss'],
    templateUrl: 'home.pug',
})
export class HomeComponent  {
    name = 'home';

	ngAfterViewInit() {

        $('.carousel[data-type="multi"] .item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        
            for (var i = 0; i < 3; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
        
                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }
}
