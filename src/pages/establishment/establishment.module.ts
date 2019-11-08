import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentPage } from './establishment';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    EstablishmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishmentPage),
    Ionic2RatingModule
  ],
})
export class EstablishmentPageModule {}
