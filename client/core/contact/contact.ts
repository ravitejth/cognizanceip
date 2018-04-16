import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'contact',
  styleUrls: [ 'contact.scss'],
  templateUrl: 'contact.pug'
})

export class ContactComponent {
  lat = 30.726107;
  lng = 76.773505;
  z_level = 14;
  zones = ['UTC -07:00 Pacific Time','UTC -06:00 Mountain Time','UTC -05:00 Central Time','UTC -04:00 Eastern Time',
          'UTC +01:00 Dublin, London, Lisbon','UTC +02:00 Central European Time','UTC +02:00 Kaliningrad','UTC +03:00 Eastern European Time',
          'UTC +03:00 Chisinau and Tiraspol','UTC +03:00 Istanbul, Kirov, Minsk, and Moscow','UTC +04:00 Astrakhan, Samara, Saratov, and Ulyanovsk',
          'UTC -07:00 Pacific and Yukon','UTC -06:00 Mountain','UTC -06:00 Saskatchewan','UTC -05:00 Central','UTC -04:00 Eastern',
          'UTC -03:00 Atlantic Time','UTC -02:30 Newfoundland','UTC +00:00 Greenwich Mean Time','UTC +01:00 Central European Time',
          'UTC +01:00 Casablanca and El Aaiun']
  
  ngOnInit(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });

    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: true, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });

  }
}
