import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Loading, Platform, AlertController, ModalController, MenuController, } from 'ionic-angular';
import * as firebase from 'firebase';
import * as _ from "lodash";
import { AngularFireAuth } from 'angularfire2/auth';

declare var google;
let map: any;
@IonicPage()
@Component({
  selector: 'page-add-establishment',
  templateUrl: 'add-establishment.html',
})
export class AddEstablishmentPage {

  places: Array<any>;
  loadedEst: Array<any>;
  
  userType;
  mobile;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public modalCtrl: ModalController, private afAuth: AngularFireAuth, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform: Platform, public navParams: NavParams, public viewCtrl: ViewController) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{ this.mobile = false;}
    this.initUser();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  initUser(){
    let ref = firebase.database().ref('user');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.key == this.afAuth.auth.currentUser.uid){
          this.userType = data.val().usertypeid;
        }
      });
    });
  }

  ionViewDidLoad() {
    let ref = firebase.database().ref('establishment');
    let catRef = firebase.database().ref('category');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        catRef.once('value', category => {
          category.forEach(category => {
            if(category.val().cat_val == data.val().category){
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
                imageurl: data.val().images,
                status: data.val().status,
                phone: data.val().phone,
                userEmail: data.val().userEmail,
                category: category.val().name,
                userType: data.val().userType,
                website: data.val().website
              });
            }
          });
          this.places = arr.sort((a, b) => parseFloat(a.averageRate) - parseFloat(b.averageRate));
          this.loadedEst = arr.sort((a, b) => parseFloat(a.averageRate) - parseFloat(b.average));
        });
      });
    });
  }
  
  initializeItem(): void{
    this.places = this.loadedEst;
  }

  getItems(searchbar){
    this.initializeItem();
    let q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.places = this.places.filter(data => {
      if(data.name && q){
        if(data.name.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  functionPlace(key, status, user){
    let modal = this.modalCtrl.create('FuncPlacesPage', {key: key, status: status, user: user});
    modal.present();
  }

  functionCategory(){
    let modal = this.modalCtrl.create('FuncCategoryPage');
    modal.present();
  }

  viewPlace(data, user){
    this.navCtrl.push('EstablishmentPage', {data, user: user});
  }

  
}
