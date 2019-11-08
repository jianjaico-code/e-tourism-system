import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageListTouristPage } from './message-list-tourist';

@NgModule({
  declarations: [
    MessageListTouristPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageListTouristPage),
  ],
})
export class MessageListTouristPageModule {}
