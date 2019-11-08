import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewsPage } from './add-news';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AddNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewsPage),
    DataTablesModule
  ],
})
export class AddNewsPageModule {}
