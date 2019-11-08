import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristMessagePage } from './tourist-message';

@NgModule({
  declarations: [
    TouristMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(TouristMessagePage),
  ],
})
export class TouristMessagePageModule {}
