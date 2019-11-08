import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content, AlertController, Platform, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {

  public items: any[] = [];

  mobile;
  recepient: Array<any>;
  message;
  chat;;
  senderEmail;
  key;
  modalSelector: boolean;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public platform: Platform, private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navParams: NavParams, public modalCtrl: ModalController) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{ this.mobile = false; }

    this.senderEmail = this.afAuth.auth.currentUser.email;
    this.getMessageRecepient();
   
    setInterval(() => {
      this.getMessageRecepient();
    },10000); 

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        this.items[i] = i
      }
    }, 300);
  }

  
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  callFunction(){
    let element = document.getElementById("messageBox");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  getMessageRecepient(){
    let ref = firebase.database().ref('user');
    let normalRec = firebase.database().ref('message/' + this.afAuth.auth.currentUser.uid);
    let adminRec = firebase.database().ref('message/Admin/');
    let adminMessageLog = firebase.database().ref('message log');
    
    ref.once('value', user => {
      user.forEach(user => {
        if(user.key == this.afAuth.auth.currentUser.uid){
          console.log(user.key);
          if(user.val().usertypeid == 2){
            this.modalSelector = true;
            let arr = [];
            normalRec.once('value', recepient => {
              recepient.forEach(recepient => {
                let last = recepient.val()[Object.keys(recepient.val())[Object.keys(recepient.val()).length - 1]];
                let dateData = new Date(last.date);
                let dateDMY = dateData.getMonth()+1 + "/" + dateData.getDate() + "/" + dateData.getFullYear();
                let hours = dateData.getHours();
                let ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; 
                var strTime = hours + ':' + (dateData.getMinutes()<10?'0':'') + dateData.getMinutes()  + ' ' + ampm;
                
                ref.once('value', user => {
                  user.forEach(user => {
                    if(recepient.key == user.key){
                      arr.push({
                        image: user.val().profilePicUrl,
                        name: user.val().name,
                        userType: user.val().usertypeid,
                        key: user.key,
                        date: dateDMY,
                        lastEmail: last.email,
                        time: strTime,
                      });

                      arr.sort(function(a,b){
                        let data = new Date(b.date + " "+b.time).getTime();
                        let data2 = new Date(a.date + " "+a.time).getTime();
                        return data - data2;  
                      });
                    }
                  });
                });
              });
              this.recepient = arr;
            });
          }

          else if(user.val().usertypeid == 3){
            this.modalSelector = false;
            let myKey = [];
            let myLog = [];
            let arr = [];
            adminRec.once('value', recepient => {
              recepient.forEach(recepient => {
                myKey.push(recepient.key);
              });
              adminMessageLog.once('value', log => {
                log.forEach(log => {
                  myKey.forEach(key => {
                    if(log.key == key){
                      myLog.push(log.val());
                    }
                  });
                });
                ref.once('value', user => {
                  user.forEach(user => {
                    myKey.forEach(key => {
                      if(user.key == key){
                        myLog.forEach(log => {
                          if(log.key == key){
                            let last = recepient.val()[Object.keys(recepient.val())[Object.keys(recepient.val()).length - 1]];
                            let dateData = new Date(log.date);
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
                              status: log.status
                            });

                            arr.sort(function(a,b){
                              let data = new Date(b.date + " "+b.time).getTime();
                              let data2 = new Date(a.date + " "+a.time).getTime();
                              return data - data2;  
                            });
                          }
                        });
                      }
                    });
                  });
                  this.recepient = arr;
                });
              });
            });
          }
        }
      });
    });
  }

  messageUser(item){
    if(this.modalSelector){
      let modal = this.modalCtrl.create('TouristMessageToBusinessmanPage', item);
      modal.present();
    }
    else{
      let modal = this.modalCtrl.create('TouristMessagePage', item);
      modal.present();
    }
  }

  pushChat(key){
    let ref = firebase.database().ref('user');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.key == this.afAuth.auth.currentUser.uid){
          
          if(data.val().usertypeid == 2){
            this.key = key;
            let ref = firebase.database().ref('message/'+ this.afAuth.auth.currentUser.uid + '/' + key);
            ref.on('value', data => {
              let arr = [];
              data.forEach(data => {
                arr.push(data.val());
              });
              this.chat = arr;
            });
          }

          else if(data.val().usertypeid == 3){
            this.key = key;
            let ref = firebase.database().ref('message/Admin/' + key);
            ref.on('value', data => {
              let arr = [];
              data.forEach(data => {
                arr.push(data.val());
              });
              this.chat = arr;
            });
          }

        }
      });
    });
  }

  // addMessage(){
  //   let alert = this.alertCtrl.create({
  //     message: 'Send To:',
  //     inputs: [
  //       {
  //         name: 'email',
  //         placeholder: 'Email'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Send',
  //         handler: element => {
  //           let userRef = firebase.database().ref('user/');
  //           userRef.on('value', data => {
  //             data.forEach(data => {
  //               if(data.val().email == element.email){
  //                 this.userData = data.val();
  //                 this.key = data.key;
  //                 let ref = firebase.database().ref('message/Admin/' + this.key);
  //                 ref.push({
  //                   email: this.senderEmail,
  //                   message: "Hello, this is an automated message. If you have some problem, please message an admin so that we can help you. Enjoy Gingoog City. ",
  //                   date: Date(),
  //                   usertypeid: this.userData.usertypeid
  //                 });
  //               }
  //             });
  //           });
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  // delete(key){
  //   let ref = firebase.database().ref('message/Admin/' + key);
  //   let alert = this.alertCtrl.create({
  //     message: 'Are you sure you want to delete this message?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel Clicked');
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => { 
  //            ref.remove();
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  sendMessage(){
    if(!this.message || this.message.length === 0 || /^\s*$/.test(this.message)){
      let alert = this.alertCtrl.create({
        message: "Empty",
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
      let ref = firebase.database().ref('user');
      ref.on('value', user => {
        user.forEach(user => {
          if(user.key == this.afAuth.auth.currentUser.uid){

            if(user.val().usertypeid == 2){
              let ref = firebase.database().ref('message/'+ this.afAuth.auth.currentUser.uid + '/' + this.key);
              let TML = firebase.database().ref('Tourist-Message-Log/' + this.key + '/' + this.afAuth.auth.currentUser.uid );
              ref.push({
                email: this.senderEmail,
                message: this.message,
                date: Date(),
                usertypeid: user.val().usertypeid
              });
              TML.set({
                key:  this.afAuth.auth.currentUser.uid,
                time: Date(),
                status: true,
                myKey: this.key
              });
            
            }

            else if(user.val().usertypeid == 3){
              let ref = firebase.database().ref('message/Admin/' + this.key);
              let messageLog = firebase.database().ref('message log/' + this.key);

              ref.push({
                email: this.senderEmail,
                message: this.message,
                date: Date(),
                usertypeid: user.val().usertypeid
              }).then(() => {
                messageLog.set({
                  status: true,
                  key: this.key,
                  date: Date()
                });
                this.getMessageRecepient();
              });
            }

          }
        });
      });
    }
    this.message = "";
    this.getMessageRecepient();
   }
}


