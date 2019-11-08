import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-tourist-message',
  templateUrl: 'tourist-message.html',
})
export class TouristMessagePage {

  public items: any[] = [];

  @ViewChild(Content) contentArea: Content;

  message;
  senderEmail;
  sendDate;
  userData;
  chat;
  key;
  userType;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public alertCtrl: AlertController, private afAuth: AngularFireAuth, public navParams: NavParams) {
    this.senderEmail = this.afAuth.auth.currentUser.email;
    this.initUserProfile();
    this.initMessage();

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        this.items[i] = i
      }
    }, 300);
  }

  exitChat(){
    this.viewCtrl.dismiss();
  }

  initUserProfile(){
    let ref = firebase.database().ref('user/');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.val().email == this.senderEmail){
          this.userData  = data.val();
          this.key = data.key;
        }
      });  
    });
  }

  callFunction(){
    this.contentArea.scrollToBottom(0);
  }

  initMessage() {
    if(this.userData.usertypeid == 1){
      let ref = firebase.database().ref('message/Admin/' + this.key);
      ref.on('value', data => {
        let arr = [];
        data.forEach(data => {
          arr.push(data.val());
        });
        this.chat = arr;
        console.log(this.chat);
      });
    }
    else if(this.userData.usertypeid == 3){
      let ref = firebase.database().ref('message/Admin/' + this.navParams.data.key);
      ref.on('value', data => {
        let arr = [];
        data.forEach(data => {
          arr.push(data.val());
        });
        this.chat = arr;
        console.log(this.chat);
      });
    }
  }

  sendMessage(){
    if(!this.message || this.message.length === 0 || /^\s*$/.test(this.message)){
      let alert = this.alertCtrl.create({
        message: "Its EMPTY",
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    }
    else{
      if(this.userData.usertypeid == 1){
        let ref = firebase.database().ref('message/Admin/' + this.afAuth.auth.currentUser.uid);
        let messageLog = firebase.database().ref('message log/' + this.afAuth.auth.currentUser.uid);
        ref.push({
          email: this.senderEmail,
          message: this.message,
          date: Date(),
          status: this.userData.status,
          usertypeid: this.userData.usertypeid
        }).then(() => {
          messageLog.set({
            key: this.afAuth.auth.currentUser.uid,
            status: false,
            date: Date()
          });
        });
      }else if(this.userData.usertypeid == 3){
        let ref = firebase.database().ref('message/Admin/' + this.navParams.data.key);
        let messageLog = firebase.database().ref('message log/' + this.navParams.data.key);
        ref.push({
          email: this.senderEmail,
          message: this.message,
          date: Date(),
          status: this.userData.status,
          usertypeid: this.navParams.data.userType
        }).then(() => {
          messageLog.set({
            key: this.navParams.data.key,
            status: true,
            date: Date()
          });
        });
      }

    }
    this.message = "";
   }
  
}
