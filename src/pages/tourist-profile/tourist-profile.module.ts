import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristProfilePage } from './tourist-profile';

@NgModule({
  declarations: [
    TouristProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TouristProfilePage),
  ],
})
export class TouristProfilePageModule {}
