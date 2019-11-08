import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, LoadingController, ViewController, AlertController, ModalController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-add-news',
  templateUrl: 'add-news.html',
})
export class AddNewsPage {
  
  mobile;
  news;

  constructor(public navCtrl: NavController, public platform: Platform, public menuCtrl: MenuController, public modalCtrl: ModalController, public alertCtrl: AlertController, public viewCtrl: ViewController, private afAuth: AngularFireAuth, public loadingCtrl: LoadingController, public navParams: NavParams) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{ this.mobile = false; }
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  ionViewDidLoad() {
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

  functionNews(key, status){
    let modal = this.modalCtrl.create('FuncNewsPage', {key: key, status: status});
    modal.present();
  }
}
