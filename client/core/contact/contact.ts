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
  zones=['UTC - 12 Baker Island Time','UTC - 11 Niue Time, Samoa Standard Time','UTC - 10 Hawaii-Aleutian Standard Time, Cook Island Time','UTC - 9:30 Marquesas Islands Time','UTC - 9 Alaska Standard Time, Gambier Island Time','UTC - 8 Pacific Standard Time','UTC - 7 Mountain Standard Time','UTC - 6 Central Standard Time','UTC - 5 Eastern Standard Time','UTC - 4:30 Venezuelan Standard Time','UTC - 4 Atlantic Standard Time','UTC - 3:30 Newfoundland Standard Time','UTC - 3 Amazon Standard Time, Central Greenland Time','UTC - 2 Fernando de Noronha Time, South Georgia & the South Sandwich Islands Time','UTC - 1 Azores Standard Time, Cape Verde Time, Eastern Greenland Time','UTC - 0 Western European Time, Greenwich Mean Time','UTC + 1 Central European Time, West African Time','UTC + 2 Eastern European Time, Central African Time','UTC + 3 Moscow Standard Time, Eastern African Time','UTC + 3:30 Iran Standard Time','UTC + 4 Gulf Standard Time, Samara Standard Time','UTC + 4:30 Afghanistan Time','UTC + 5 Pakistan Standard Time, Yekaterinburg Standard Time','UTC + 5:30 Indian Standard Time, Sri Lanka Time','UTC + 5:45 Nepal Time','UTC + 6 Bangladesh Time, Bhutan Time, Novosibirsk Standard Time','UTC + 6:30 Cocos Islands Time, Myanmar Time','UTC + 7 Indochina Time, Krasnoyarsk Standard Time','UTC + 8 Chinese Standard Time, Australian Western Standard Time, Irkutsk Standard Time','UTC + 8:45 Southeastern Western Australia Standard Time','UTC + 9 Japan Standard Time, Korea Standard Time, Chita Standard Time','UTC + 9:30 Australian Central Standard Time','UTC + 10 Australian Eastern Standard Time, Vladivostok Standard Time','UTC + 10:30 Lord Howe Standard Time','UTC + 11 Solomon Island Time, Magadan Standard Time','UTC + 11:30 Norfolk Island Time','UTC + 12 New Zealand Time, Fiji Time, Kamchatka Standard Time','UTC + 12:45 Chatham Islands Time','UTC + 13 Tonga Time, Phoenix Islands Time','UTC + 14 Line Island Time']
  
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
