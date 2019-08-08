import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  'selector': 'app-sibling',
  'templateUrl': './siblingdiv.component.html'
})

export class SiblingDivComponent implements OnInit {

  public sharedMsg = '';

  constructor (private dataService: DataService) {
  }

  ngOnInit () {
    this.dataService.currentMsg.subscribe(msg => {
      this.sharedMsg = msg;
    });
  }

  shareNewMessage () {
    this.dataService.changeMessage("New message shared");
  }

}