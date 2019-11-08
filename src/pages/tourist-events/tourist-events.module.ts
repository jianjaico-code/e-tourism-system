import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristEventsPage } from './tourist-events';

@NgModule({
  declarations: [
    TouristEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristEventsPage),
  ],
})
export class TouristEventsPageModule {}
