import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-getting-here',
  templateUrl: 'getting-here.html',
})
export class GettingHerePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  exit(){
    this.navCtrl.setRoot(HomePage);
  }

}
