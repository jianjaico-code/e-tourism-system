import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-edit-rating',
  templateUrl: 'edit-rating.html',
})
export class EditRatingPage {

  name;
  rate: boolean = false;
  key;
  ratings: Array<any>;
  loadedRatings: Array<any>;
  averageRate;
  dateTodaty = new Date();
  peopleRated;
  userRestricted: boolean;
 

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public viewCtrl: ViewController, public alertCtrl: AlertController, public navParams: NavParams) {
    this.name = this.navParams.data.name;
    this.key = this.navParams.data.key;

    console.log(this.dateTodaty);
    this.initRating();
  }

  exit(){
    this.viewCtrl.dismiss();
  }

  initRating(){
    if(this.navParams.data.userEmail == this.afAuth.auth.currentUser.email){
      this.userRestricted = true;
    }else{this.userRestricted = false}

    let ref = firebase.database().ref('user/')
    let ratingRef = firebase.database().ref('rating');
    let user;

    ref.on('value', data => {
      data.forEach(data => {
        user = data.val();
      });
      ratingRef.on('value', data => {
        let tmp = [];
        data.forEach(data => {
          if(user.email == data.val().email){
            if(data.val().establishmentName == this.name){
              this.rate = true;
              tmp.push({
                key: data.key,
                establishmentName: data.val().establishmentName,
                email: data.val().email,
                rating: data.val().rating,
                comments: data.val().comments,
                profilePic: user.profilePicUrl
              });
            }
          }
        });
        this.ratings = tmp.reverse();
        this.loadedRatings = tmp;
        this.peopleRated = this.ratings.length;
        this.getAverageRating();
        // this.setNewData();
      });
    });
  }

  initializeItem(): void{
    this.ratings = this.loadedRatings;
  }

  getItems(searchbar){
    this.initializeItem();
    let q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.ratings = this.ratings.filter(data => {
      if(data.email && q){
        if(data.email.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  removeRating(data){
    let ref = firebase.database().ref('rating/' + data);
    let alert = this.alertCtrl.create({
      message: 'Are you sure you want to delete this rating?',
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

  getAverageRating(){
    let rating = [];
    this.ratings.map(data =>{
      return rating.push(data.rating);
    });

    if(rating.length == 0){ this.averageRate = 0;}
    else {
      let rate = rating.reduce((total, score) => total + score) / rating.length;
      this.averageRate = Math.round(rate);
    }
  }

  setNewData(){
    let ref = firebase.database().ref('establishment/' + this.key);
    ref.set({
      name: this.navParams.data.name,
      address: this.navParams.data.address,
      description: this.navParams.data.description,
      phone: this.navParams.data.phone,
      latitude: this.navParams.data.latitude,
      longitude: this.navParams.data.longitude,
      website: this.navParams.data.website,
      category: this.navParams.data.category,
      status:  this.navParams.data.status,
      images: this.navParams.data.imageurl,
      averageRate: this.averageRate,
      peopleRated: this.peopleRated
    });
  }

}
