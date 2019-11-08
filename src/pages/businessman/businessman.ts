import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ModalController, AlertController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-businessman',
  templateUrl: 'businessman.html',
})
export class BusinessmanPage {

  key;
  places: Array<any>;
  userType;
  mobile;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public platform: Platform, public navParams: NavParams, public afAuth: AngularFireAuth, public modalCtrl: ModalController) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{ this.mobile = false; }
    
    this.key = afAuth.auth.currentUser.email;
    this.initUser();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  initUser(){
    let ref = firebase.database().ref('user/');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.key == this.afAuth.auth.currentUser.uid){
          this.userType = data.val().usertypeid;
        }
      });
    });
  }

  functionPlace(key, status, user){
    let modal = this.modalCtrl.create('FuncPlacesPage', {key: key, status: status, user: user});
    modal.present();
  }

  ngOnInit() {
    let ref = firebase.database().ref('establishment');
    let catRef = firebase.database().ref('category')
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        catRef.once('value', category => {
          category.forEach(category => {
            if(category.val().cat_val == data.val().category){
              if(data.val().userEmail == this.key){
                if(data.val().userType == 2){      
                  arr.push({
                    key: data.key,
                    name: data.val().name,
                    address: data.val().address,
                    peopleRated: data.val().peopleRated,
                    averageRate: data.val().averageRate,
                    description: data.val().description,
                    latitude: data.val().latitude,
                    permits: data.val().permits,
                    longitude: data.val().longitude,
                    status: data.val().status,
                    imageurl: data.val().images,
                    website: data.val().website,
                    phone: data.val().phone,
                    userEmail: data.val().userEmail,
                    category: category.val().name,
                    userType: data.val().userType
                  });
                }
              }
            }
          });
          this.places = arr.sort((a, b) => parseFloat(a.averageRate) - parseFloat(b.averageRate));
        });
      });
    });
  }

  viewPlace(data, user){
    this.navCtrl.push('EstablishmentPage', {user: user, data});
  }

}
