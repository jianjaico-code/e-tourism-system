import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-tourist-places',
  templateUrl: 'tourist-places.html',
})
export class TouristPlacesPage {

  establishments: Array<any>;
  loadedEst: Array<any>;
  mobile: boolean;

  constructor(public platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
    if (this.platform.is('mobile')) {
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
    this.getEstablishments(100);
  }

  getEstablishments(element){
    let ref = firebase.database().ref('establishment');
    let catRef = firebase.database().ref('category');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        catRef.once('value', category => {
          category.forEach( category => {
            if(category.val().cat_val == data.val().category){
              if(data.val().status == 1){
                let info = {
                  key: data.key,
                  name: data.val().name,
                  address: data.val().address,
                  peopleRated: data.val().peopleRated,
                  averageRate: data.val().averageRate,
                  description: data.val().description,
                  latitude: data.val().latitude,
                  longitude: data.val().longitude,
                  permits: data.val().permits,
                  imageurl: data.val().images,
                  category: category.val().name,
                  phone: data.val().phone,
                  status: data.val().status,
                  website: data.val().website,
                  userEmail: data.val().userEmail,
                  userType: data.val().userType
                }
               if(element == category.val().cat_val){
                  if(info.category == category.val().name){
                    arr.push(info);
                  }
                }
                else if(element == 100){
                  arr.push(info);
                }
              }
            }
          });
        });
        return false;
      });
      this.establishments = arr.sort((a, b) => parseFloat(a.averageRate) - parseFloat(b.averageRate)).reverse();
      this.loadedEst = arr.sort((a, b) => parseFloat(a.averageRate) - parseFloat(b.averageRate)).reverse();
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

    this.establishments = this.establishments.filter(data => {
      if(data.name && q){
        if(data.name.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  filterEst(){
    let ref = firebase.database().ref('category');
    let alert = this.alertCtrl.create();
    alert.setTitle('Category');
    ref.on('value', snapshot => {
      snapshot.forEach(snapshot => {
        alert.addInput({
          type: 'radio',
          label: snapshot.val().name,
          value: snapshot.val().cat_val,
          checked: false
        });
      });
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.getEstablishments(data);
      }
    });
    alert.present();
  }

  pushEst(key){
    this.navCtrl.setRoot('EstablishmentPage', key);
  }
}
