import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  establishments: Array<any>;
  loadedEst: Array<any>

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public viewCtrl: ViewController,  public modalCtrl: ModalController, public navParams: NavParams) {
    this.checkEstablishment();
  }

  addEstablishment(){
    let alert = this.alertCtrl.create({
      message: 'Choose Type',
      buttons: [
        {
          text: 'Establishment',
          handler: () =>{
            console.log("Establishment");
            let modal = this.modalCtrl.create('AddEstablishmentPage', {key: true});
            modal.present();
          }
        },
        {
          text: 'Landmark',
          handler: () =>{
            let modal = this.modalCtrl.create('AddEstablishmentPage', {key: false});
            modal.present(); 
          }
        }
      ]
    });
    alert.present();
  }

  addService(key){
    let modal = this.modalCtrl.create('AddServicePage', {key: key});
    modal.present();
  }

  addProduct(key){
    let modal = this.modalCtrl.create('AddProductPage', {key: key});
    modal.present();
  }

  checkEstablishment(){
    let ref = firebase.database().ref('establishment');
    ref.on('value', data => {
      let tmp = [];
      data.forEach(data => {
        tmp.push({
          key: data.key,
          name: data.val().name,
          address: data.val().address,
          peopleRated: data.val().peopleRated,
          averageRate: data.val().averageRate,
          description: data.val().description,
          latitude: data.val().latitude,
          longitude: data.val().longitude,
          imageurl: data.val().images,
          status: data.val().status,
          userEmail: data.val().userEmail,
          category: data.val().category,
          userType: data.val().userType,
          website: data.val().website
        });
      });
      this.establishments = tmp;
      this.loadedEst = tmp;
      console.log(this.establishments);
    });
  }

  initializeItem(): void{
    this.establishments = this.loadedEst;
  }

  getItems(searchbar){
    this.initializeItem();
    let q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.establishments = this.establishments.filter(data =>{
      if(data.name && q){
        if(data.name.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
    console.log(q, this.establishments.length);
  }

  update(key){
    let modal = this.modalCtrl.create('EditEstablishmentPage', {key: key, userRestriction: false});
    modal.present();
  }

  rating(key){
    let modal = this.modalCtrl.create('EditRatingPage', key);
    modal.present();
  }

  remove(key){
    let ref = firebase.database().ref('establishment/' + key);
    ref.remove(); 
  }
}
