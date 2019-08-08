import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ParentDivComponent } from './test/parentdiv.component';
import { ChildDivComponent } from './test/childdiv.component';
import { SiblingDivComponent } from './test/siblingdiv.component';

import { DataService } from './test/data.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    ParentDivComponent,
    ChildDivComponent,
    SiblingDivComponent
  ],
  providers: [
    DataService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
