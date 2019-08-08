import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ChildDivComponent } from './childdiv.component';


@Component({
  'selector': 'app-parent',
  'templateUrl': './parentdiv.component.html'
})

export class ParentDivComponent implements AfterViewInit {

  @ViewChild(ChildDivComponent) child;
  

  public message: String = 'Hi from Parent';

  public childMsg: String = '';

  //using event emitter and output
  recieveMsg($event) {
    this.childMsg = $event;
  }

  ngAfterViewInit() {
    this.childMsg = this.child.childMsg;
  }

}