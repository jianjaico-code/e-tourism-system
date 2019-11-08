import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MappingPage } from './mapping';

@NgModule({
  declarations: [
    MappingPage,
  ],
  imports: [
    IonicPageModule.forChild(MappingPage),
  ],
})
export class MappingPageModule {}
