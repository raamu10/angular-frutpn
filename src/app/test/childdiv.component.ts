import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  'selector': 'app-child',
  'templateUrl': './childdiv.component.html'
})

export class ChildDivComponent {

  @Input() message:String;

  public childMsg: String = 'Child msg';

  @Output() msgEvent = new EventEmitter();

  sendMsgToParent () {
    this.childMsg = 'Msg from Child';
    this.msgEvent.emit(this.childMsg);
  }

}