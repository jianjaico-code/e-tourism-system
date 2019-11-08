import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarePage } from './fare';

@NgModule({
  declarations: [
    FarePage,
  ],
  imports: [
    IonicPageModule.forChild(FarePage),
  ],
})
export class FarePageModule {}
