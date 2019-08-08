import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private msgSource = new BehaviorSubject<string>("Default msg from Service");
  public currentMsg = this.msgSource.asObservable();

  constructor() {

  }

  changeMessage (message: string) {
    this.msgSource.next(message);
  }


}