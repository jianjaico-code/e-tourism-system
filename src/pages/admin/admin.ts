import { Component } from '@angular/core';
import { Platform, NavController, ModalController, LoadingController, AlertController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  users: Array<any>;
  loadedUser: Array<any>;
  mobile;
  
  constructor(public navCtrl: NavController, public platform: Platform, public menuCtrl: MenuController, public alertCtrl: AlertController, public modalCtrl: ModalController, private loadingCtrl: LoadingController, private authData: AuthProvider, private afAuth: AngularFireAuth) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  initUpdate(key){
    let status;
    let ref = firebase.database().ref('user/' + key.key);
    if(key.status){status = "2";}
    else if(!key.status){status = "1";}
    let data = this.alertCtrl.create({
      message: "Are you sure to change " + key.email +" Status?",
      buttons:[
        {
          text: "No",
          handler: () => {}
        },
        {
          text: "Yes",
          handler:() => {

            console.log(key.key);
            let loader = this.loadingCtrl.create();
            loader.present();
            
            setTimeout(() => {
              ref.update({
                email: key.email,
                address: key.address,
                name: key.name,
                status: status,
                profilePicUrl: key.profilePicUrl,
                usertypeid: key.usertypeid
              }).then(() => {
                  loader.dismiss();
              });
            }, 2000);
          }
        },
      ]
    });
    data.present();
  }

  ionViewDidLoad() {
    let ref = firebase.database().ref('user/');
    ref.once('value', data => {
      let arr = [];   
      data.forEach(data => {
       let reference = data.val().status;
       let status: boolean;
       if(reference == 1){status = true;}
       else if(reference == 2){status = false;}
 
        if(data.val().usertypeid != 3){
          arr.push({
            key: data.key,
            email: data.val().email,
            name: data.val().name,
            address: data.val().address,
            status: status,
            profilePicUrl: data.val().profilePicUrl,
            usertypeid: data.val().usertypeid
          });
        }
       
      });
      this.users = arr.reverse();
      this.loadedUser = arr.reverse();
    });
   }

   initializeItem(): void{
    this.users = this.loadedUser;
  }

  getItems(searchbar){
    this.initializeItem();
    let q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.users = this.users.filter(data => {
      if(data.name && q){
        if(data.name.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }
 
   updateStatus(user){
     let loader = this.loadingCtrl.create();
     loader.present();

     let status;
     let ref = firebase.database().ref('user/' + user.key);

     if(user.status){status = "1";}
     else if(!user.status){status = "2";}
 
     setTimeout(() => {
        ref.set({
          email: user.email,
          address: user.address,
          name: user.name,
          status: status,
          profilePicUrl: user.profilePicUrl,
          usertypeid: user.usertypeid
        }).then(() => {
          loader.dismiss();
        });
     }, 2000);
   }
}
 