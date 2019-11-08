import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  news;
  mobile: boolean;

  constructor(public platform: Platform,public navCtrl: NavController, private modalCtrl: ModalController, public navParams: NavParams) {
    if (this.platform.is('mobile')) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  login(){
    let modal = this.modalCtrl.create('LoginPage');
    modal.present();
  }

  signup(){
    let modal = this.modalCtrl.create('SignupPage');
    modal.present();
  }

  getNewsData(){
    let ref = firebase.database().ref('postNews');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        let strDate = data.val().date;
        let date = strDate.substring(0, 10);

        arr.push({
          key: data.key,
          date: date,
          title: data.val().title,
          name: data.val().name,
          image: data.val().image,
          description: data.val().description,
        });

      });
      this.news = arr;
    });
  }

}
