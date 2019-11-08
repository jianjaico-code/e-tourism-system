import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  data;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.initData();
    console.log(this.data);
  }

  initData(){
    this.data = {
      title: this.navParams.data.title,
      description: this.navParams.data.description,
      image: this.navParams.data.imageUrl
    }
  }

  exit(){
    this.viewCtrl.dismiss();
  }

}
