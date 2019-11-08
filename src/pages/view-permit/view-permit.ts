import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-permit',
  templateUrl: 'view-permit.html',
})
export class ViewPermitPage {

  data;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
  }

}
