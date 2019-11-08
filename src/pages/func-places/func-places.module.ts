import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuncPlacesPage } from './func-places';

@NgModule({
  declarations: [
    FuncPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(FuncPlacesPage),
  ],
})
export class FuncPlacesPageModule {}
