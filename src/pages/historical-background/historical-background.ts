import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-historical-background',
  templateUrl: 'historical-background.html',
})
export class HistoricalBackgroundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  exit(){
    this.navCtrl.setRoot(HomePage);
  }
}
