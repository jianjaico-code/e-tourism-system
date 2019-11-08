import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ModalController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event;
  mobile;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public platform: Platform, public modalCtrl: ModalController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private viewCtrl: ViewController, public navParams: NavParams) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }else{ this.mobile = false; }
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  ionViewDidLoad() {
    let ref = firebase.database().ref('event');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        arr.push({
          key: data.key,
          description: data.val().description,
          title: data.val().title,
          image: data.val().image
        });
      });
      this.event = arr;
    });
  }

  functionEvent(key, status){
    let modal = this.modalCtrl.create('FuncEventsPage', {key: key, status: status});
    modal.present();
  }
}
