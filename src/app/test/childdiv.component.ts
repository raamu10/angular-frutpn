import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from './data.service';

@Component({
  'selector': 'app-child',
  'templateUrl': './childdiv.component.html'
})

export class ChildDivComponent implements OnInit {

  @Input() message:String;

  public childMsg: String = 'Child msg';

  @Output() msgEvent = new EventEmitter();

  public sharedMsg = '';

  constructor (private dataService: DataService) {

  }

  ngOnInit () {
    this.dataService.currentMsg.subscribe(msg => {
      this.sharedMsg = msg;
    });
  }

  sendMsgToParent () {
    this.childMsg = 'Msg from Child';
    this.msgEvent.emit(this.childMsg);
  }

}