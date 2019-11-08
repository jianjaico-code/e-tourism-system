import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessmanMessagePage } from './businessman-message';

@NgModule({
  declarations: [
    BusinessmanMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessmanMessagePage),
  ],
})
export class BusinessmanMessagePageModule {}
