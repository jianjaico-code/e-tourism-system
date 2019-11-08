import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRatingPage } from './edit-rating';

@NgModule({
  declarations: [
    EditRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRatingPage),
  ],
})
export class EditRatingPageModule {}
