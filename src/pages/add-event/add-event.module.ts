import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventPage } from './add-event';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AddEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventPage),
    DataTablesModule
  ],
})
export class AddEventPageModule {}
