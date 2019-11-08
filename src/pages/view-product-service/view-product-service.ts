import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-view-product-service',
  templateUrl: 'view-product-service.html',
})
export class ViewProductServicePage {
  
  key;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.key = this.navParams.data.key;
    this.initData();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  initData(){
    if(this.navParams.data.view == 1){
      this.getProducts();
      console.log(this.data);
    }
    else if(this.navParams.data.view == 2){
      this.getServices();
      console.log(this.data);
    }
  }

  getProducts(){
    let ref = firebase.database().ref('product');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        if(data.val().establishmentKey == this.key){
          arr.push(data.val());
        }
      });
      this.data = arr;
    });
  }

  getServices(){
    let ref = firebase.database().ref('service');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        if(data.val().establishmentKey == this.key){
          arr.push(data.val());
        }
      });
      this.data = arr;
    });
  }

}
