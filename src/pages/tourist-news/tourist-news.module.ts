import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristNewsPage } from './tourist-news';

@NgModule({
  declarations: [
    TouristNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristNewsPage),
  ],
})
export class TouristNewsPageModule {}
