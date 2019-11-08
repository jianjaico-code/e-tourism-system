import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-tourist-events',
  templateUrl: 'tourist-events.html',
})
export class TouristEventsPage {

  mobile;
  events;

  constructor(public platform: Platform, public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
    this.initEvents();
  }

  initEvents(){
    let ref = firebase.database().ref('event');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        arr.push(data.val());
      });
      this.events = arr;
    });
  }

  pushEvent(key){
    let modal = this.modalCtrl.create('EventPage', key);
    modal.present();
  }
}
