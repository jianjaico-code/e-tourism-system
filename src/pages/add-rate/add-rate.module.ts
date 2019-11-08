import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRatePage } from './add-rate';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    AddRatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddRatePage),
    Ionic2RatingModule
  ],
})
export class AddRatePageModule {}
