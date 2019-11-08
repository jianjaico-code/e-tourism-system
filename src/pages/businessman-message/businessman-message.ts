import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-businessman-message',
  templateUrl: 'businessman-message.html',
})
export class BusinessmanMessagePage {

  key;
  recepient;
  loadedRec;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.key = afAuth.auth.currentUser.uid;
    this.getMessageRecepient()
  }

  getMessageRecepient(){
    let ref = firebase.database().ref('message/' + this.key);
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        arr.push(data.key);
        console.log(data.key);
      });
      this.recepient = arr;
      this.loadedRec = arr;
      console.log(this.recepient);
    });
  }

  pushChat(key){
    let modal = this.modalCtrl.create('MessageTouristFromBusinessmanPage', {key: key, businessman: this.key});
    modal.present();
  }

  delete(key){
    let ref = firebase.database().ref('message/'+ this.key+'/' + key);
    let alert = this.alertCtrl.create({
      message: 'Are you sure you want to delete this message?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => { 
             ref.remove();
          }
        }
      ]
    });
    alert.present();
  }

  messageAdmin(){
    let modal = this.modalCtrl.create('TouristMessagePage');
    modal.present();
  }

}
