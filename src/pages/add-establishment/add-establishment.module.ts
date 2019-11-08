import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEstablishmentPage } from './add-establishment';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AddEstablishmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEstablishmentPage),
    DataTablesModule
  ],
})
export class AddEstablishmentPageModule {}
