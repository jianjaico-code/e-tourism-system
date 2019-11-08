import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-message-list-tourist',
  templateUrl: 'message-list-tourist.html',
})
export class MessageListTouristPage {

  public items: any[] = [];

  mobile;
  recepient: Array<any>;
  message;
  chat;;
  senderEmail;
  recieverEmail;
  key;
  userData;

  constructor(public platform: Platform, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }

    this.userData = "";
    this.key = afAuth.auth.currentUser.uid;
    this.senderEmail = afAuth.auth.currentUser.email;
    this.getMessageRecepient();

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        this.items[i] = i
      }
    }, 300);
  }

  callFunction(){
    let element = document.getElementById("messageBox");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  messageOwner(data){
    let modal = this.modalCtrl.create('TouristMessageToBusinessmanPage',  data);
    modal.present();
  }

  getMessageRecepient(){
    let ref = firebase.database().ref('Tourist-Message-Log/' + this.key);
    let user = firebase.database().ref('user');

    ref.on('value', data => {
      data.forEach(data => {
        
        if(this.key == data.val().myKey){
          user.on('value', user => {
            let arr = [];
            user.forEach(user => {
             if(user.key == data.val().key){
              let dateData = new Date( data.val().time);
              let dateDMY = dateData.getMonth()+1 + "/" + dateData.getDate() + "/" + dateData.getFullYear();
              let hours = dateData.getHours();
              let ampm = hours >= 12 ? 'pm' : 'am';
              hours = hours % 12;
              hours = hours ? hours : 12; 
              var strTime = hours + ':' + (dateData.getMinutes()<10?'0':'') + dateData.getMinutes()  + ' ' + ampm;

              arr.push({
                image: user.val().profilePicUrl,
                name: user.val().name,
                userEmail: user.val().email,
                userType: user.val().usertypeid,
                key: user.key,
                date: dateDMY,
                time: strTime,
                status: data.val().status
              });
             }
            });
            this.recepient = arr;
          });
        }
      });
    });
  }

  pushChat(key){
    let ref = firebase.database().ref('user');
    ref.on('value', data => {
      data.forEach(data => {
        if(key == data.key){
          this.recieverEmail = data.key;
          this.userData  = data.val();
        }
        if(data.key == this.afAuth.auth.currentUser.uid){
          this.key = key;
          let ref = firebase.database().ref('message/'+ key + '/' + this.afAuth.auth.currentUser.uid);
          ref.on('value', data => {
            let arr = [];
            data.forEach(data => {
              arr.push(data.val());
            });
            this.chat = arr;
          });   
        }
      });
    });
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
      if(this.userData == ""){
        let alert2 = this.alertCtrl.create({
          message: "Please select a user you want to message",
          buttons: [
            {
              text:"OK",
              role: 'cancel'
            }
          ]
        });
        alert2.present();
      }
      else{
        let ref = firebase.database().ref('message/' +this.recieverEmail+'/' + this.afAuth.auth.currentUser.uid);
        let TML = firebase.database().ref('Tourist-Message-Log/' + this.afAuth.auth.currentUser.uid + '/' + this.recieverEmail);
        ref.push({
          email: this.senderEmail,
          message: this.message,
          date: Date(),
          usertypeid: this.userData.usertypeid
        });
        TML.set({
          key: this.recieverEmail,
          time: Date(),
          status: false,
          myKey: this.afAuth.auth.currentUser.uid
        });
        this.getMessageRecepient();
      }
    }
    this.message = "";
    this.getMessageRecepient();
   }

}
