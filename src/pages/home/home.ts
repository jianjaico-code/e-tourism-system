import { Component } from '@angular/core';
import { Platform, NavController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events;
  data;
  mobile: boolean;

  constructor(public platform: Platform, public navCtrl: NavController, public modalCtrl: ModalController) {
    if (this.platform.is('mobile')) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
    this.getNews();
  }

  getNews(){
    let ref = firebase.database().ref('postNews');
    ref.on('value', data =>{
      let arr = [];
      data.forEach(data => {
        let strDate = data.val().date;
        let date = strDate.substring(0, 10);

        arr.push({
          key: data.key,
          date: date,
          image: data.val().image,
          name: data.val().name,
          title: data.val().title,
          description: data.val().description,
        });
      });
      this.data = arr.reverse();
    });
  }

  news(key){
    let modal = this.modalCtrl.create('TouristNewsPage', key);
    modal.present();
  }

  pushHistoricalBackground(){
    this.navCtrl.setRoot('HistoricalBackgroundPage');
  }

  pushGettingHere(){
    this.navCtrl.setRoot('GettingHerePage');
  }
}
