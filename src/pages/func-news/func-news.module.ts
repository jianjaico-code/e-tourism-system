import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuncNewsPage } from './func-news';

@NgModule({
  declarations: [
    FuncNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(FuncNewsPage),
  ],
})
export class FuncNewsPageModule {}
