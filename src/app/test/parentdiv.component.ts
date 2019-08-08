import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ChildDivComponent } from './childdiv.component';

import { DataService } from './data.service';


@Component({
  'selector': 'app-parent',
  'templateUrl': './parentdiv.component.html'
})

export class ParentDivComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildDivComponent) child;
  

  public message: String = 'Hi from Parent';

  public childMsg: String = '';

  public cmnMsg = '';

  constructor (private dataService: DataService) {
    
  }

  //using event emitter and output
  recieveMsg($event) {
    this.childMsg = $event;
  }

  ngOnInit () {
    this.dataService.currentMsg.subscribe(msg => {
      this.cmnMsg = msg;
    });
  }

  ngAfterViewInit() {
    this.childMsg = this.child.childMsg;
  }

}