import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristPlacesPage } from './tourist-places';

@NgModule({
  declarations: [
    TouristPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristPlacesPage),
  ],
})
export class TouristPlacesPageModule {}
