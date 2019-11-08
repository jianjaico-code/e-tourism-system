import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProductServicePage } from './view-product-service';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    ViewProductServicePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewProductServicePage),
    DataTablesModule
  ],
})
export class ViewProductServicePageModule {}
