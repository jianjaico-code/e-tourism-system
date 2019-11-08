import { Component, ViewChild } from '@angular/core';   
import { IonicPage, NavController, NavParams, Content, ViewController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-tourist-message-to-businessman',
  templateUrl: 'tourist-message-to-businessman.html',
})
export class TouristMessageToBusinessmanPage {

  public items: any[] = [];

  @ViewChild(Content) contentArea: Content;

  message;
  senderEmail;
  sendDate;
  userData;
  chat;
  data;
  userKey;
  recieverEmail;
  type;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public viewCtrl: ViewController) {
    this.senderEmail = this.afAuth.auth.currentUser.email;
    this.data = this.navParams.data;
    this.initUserProfile();

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        this.items[i] = i
      }
    }, 300);
  }

  exitChat(){
    this.viewCtrl.dismiss();
  }

  initUserProfile() {
    let ref = firebase.database().ref('user/');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.val().email == this.senderEmail){
          this.userData  = data.val();
          this.userKey = data.key;
          this.type = data.val().usertypeid;
        }
        else if(data.val().email == this.data.userEmail){
          this.recieverEmail = data.key;
          console.log(this.recieverEmail);
        }
      });
    });
  }

  callFunction(){
    this.contentArea.scrollToBottom(0);
  }

  ionViewDidLoad() {
    if(this.type == 1){
      let ref = firebase.database().ref('message/' +this.recieverEmail+'/' + this.userKey);
      ref.on('value', data => {
        let arr = [];
        data.forEach(data => {
          arr.push(data.val());
        });
        this.chat = arr;
        console.log(this.chat);
      });
    }
    else if(this.type == 2){
      let ref = firebase.database().ref('message/' +this.userKey+'/' + this.navParams.data.key);
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
      if(this.type == 1){
        let ref = firebase.database().ref('message/' +this.recieverEmail+'/' + this.afAuth.auth.currentUser.uid);
        let TML = firebase.database().ref('Tourist-Message-Log/' + this.afAuth.auth.currentUser.uid + '/' + this.recieverEmail);
        ref.push({
          email: this.senderEmail,
          message: this.message,
          date: Date(),
          usertypeid: this.userData.usertypeid
        }).then(() => {
          TML.set({
            key: this.recieverEmail,
            time: Date(),
            status: false,
            myKey: this.afAuth.auth.currentUser.uid
          });
        });
      }
      else if(this.type == 2){
        let ref = firebase.database().ref('message/' +this.userKey+'/' + this.navParams.data.key);
      let TML = firebase.database().ref('Tourist-Message-Log/' + this.navParams.data.key);
      ref.push({
        email: this.senderEmail,
        message: this.message,
        date: Date(),
        usertypeid: this.navParams.data.userType
      }).then(() => {
        TML.set({
          key: this.navParams.data.key,
          time: Date(),
          status: true,
          myKey: this.afAuth.auth.currentUser.uid
        });
      });
      }
    }
    this.message = "";
   }
  

}
