import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuncEventsPage } from './func-events';

@NgModule({
  declarations: [
    FuncEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(FuncEventsPage),
  ],
})
export class FuncEventsPageModule {}
