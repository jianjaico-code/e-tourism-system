import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tourist-news',
  templateUrl: 'tourist-news.html',
})
export class TouristNewsPage {
  
  data;
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.data = navParams.data;
  }

  exit(){
    this.viewCtrl.dismiss();
  }

}
