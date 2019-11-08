import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-rate',
  templateUrl: 'add-rate.html',
})
export class AddRatePage {
  
  @ViewChild('comments') comments;
  mobile;
  key;
  email;
  name;
  profilePic;
  allRating;
  ratingCleanliness = 0;
  ratingService  = 0;
  ratingFacilities  = 0;
  ratingLocation  = 0;
  ratingFoods  = 0;
  ratingRooms  = 0;
  ref
  userRated;
  ratingCleanlinessLegend;
  ratingServiceLegend;
  ratingFacilitiesLegend;
  ratingLocationLegend;
  ratingFoodsLegend;
  ratingRoomsLegend;
  ratingCheck: boolean;
    
  dateToday = new Date().toISOString();

  constructor(public platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, private afAuth: AngularFireAuth, public viewCtrl: ViewController, public navParams: NavParams) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }

    this.key = this.navParams.data.key;
    this.name = this.navParams.data.name;
    this.email = this.afAuth.auth.currentUser.email;
    this.profilePic = this.afAuth.auth.currentUser.photoURL;

    this.ratingCleanlinessLegend = "Please Click to Rate";
    this.ratingServiceLegend = "Please Click to Rate";
    this.ratingFacilitiesLegend = "Please Click to Rate";
    this.ratingLocationLegend = "Please Click to Rate";
    this.ratingFoodsLegend = "Please Click to Rate";
    this.ratingRoomsLegend = "Please Click to Rate";

    this.ref = firebase.database().ref('rating');
    this.checkRating();
  }

  checkRating(){
    this.ref.on('value', data =>{
      let arr = [];
      data.forEach(data => {
        if(this.key == data.val().establishmentKey){
          arr.push({
            key: data.key,
            email: data.val().email
          });
        }
      });
      this.allRating = arr;
      console.log(this.allRating);
    });
  }

  checkData(){
    console.log(this.ratingCleanliness);
    if(this.ratingCleanliness == 0 || this.ratingService == 0 || this.ratingFacilities == 0 ||  this.ratingLocation == 0 || this.ratingFoods == 0 || this.ratingRooms == 0){
      this.ratingCheck = true;
      console.log(this.ratingCleanliness);
    }
  }

  sendRatings(){
    this.checkData();
    this.allRating.forEach(element => {
      if(this.email == element.email){
        let alert = this.alertCtrl.create({
          message: "You already gave your review, do want to change it?",
          buttons: [
            {
              text: 'Disagree',
              handler: () => {
                console.log("Disagree Clicked")
                this.dismiss();
              }
            },
            {
              text: 'Agree',
              handler: () => {
                this.editRate();
              }
            }
          ]
        });
        alert.present();
        return this.userRated = true;
      }
    });

    if(this.userRated == true){console.log("User Rated")}
    else{
      let rating = [];
      let activityLog = firebase.database().ref('activityLog');

      rating.push(this.ratingCleanliness, this.ratingService, this.ratingFacilities, this.ratingLocation, this.ratingFoods, this.ratingRooms);
      let rate = rating.reduce((total, score) => total + score) / rating.length;
      console.log(rate);
      this.ref.push({
        establishmentKey: this.key,
        establishmentName: this.name,
        cleanlinessRating: this.ratingCleanliness,
        serviceRating: this.ratingService,
        facilitiesRating: this.ratingFacilities,
        locationRating: this.ratingLocation,
        foodsRating: this.ratingFoods,
        rating: Math.round(rate),
        roomsRating: this.ratingRooms,
        comments: this.comments.value,
        email: this.email,
        profilePic: this.profilePic
      });
      activityLog.push({
        Description: "You have rated " + this.name,
        Date: this.dateToday,
        email: this.email
      });
      this.dismiss();
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  editRate(){
    let rating = [];
    rating.push(this.ratingCleanliness, this.ratingService, this.ratingFacilities, this.ratingLocation, this.ratingFoods, this.ratingRooms);
    let rate = rating.reduce((total, score) => total + score) / rating.length;
    this.allRating.forEach(element => {
      if(this.email == element.email){
        console.log(rate);
        let activityLog = firebase.database().ref('activityLog');
        let refToPush = firebase.database().ref('rating/' + element.key);
        refToPush.set({
          establishmentKey: this.key,
          establishmentName: this.name,
          cleanlinessRating: this.ratingCleanliness,
          serviceRating: this.ratingService,
          facilitiesRating: this.ratingFacilities,
          locationRating: this.ratingLocation,
          foodsRating: this.ratingFoods,
          roomsRating: this.ratingRooms,
          rating: Math.round(rate),
          comments: this.comments.value,
          email: this.email,
          profilePic: this.profilePic
        });

        activityLog.push({
          Description: "You change your rating in " + this.name,
          Date: this.dateToday,
          email: this.email
        });
        this.dismiss();
      }
    });
  }

  onCleanlinessModelChange(event){
    this.ratingCleanliness = event;
    
    if(event == 1){
      this.ratingCleanlinessLegend = "Terrible";
    }
    else if(event == 2){
      this.ratingCleanlinessLegend = "Poor";
    }
    else if(event == 3){
      this.ratingCleanlinessLegend = "Average";
    }
    else if(event == 4){
      this.ratingCleanlinessLegend = "Very Good";
    }
    else if(event == 5){
      this.ratingCleanlinessLegend = "Excellent";
    }
    else{this.ratingCleanlinessLegend = "Please Click to Rate"}
  }

  onServiceModelChange(event){
    this.ratingService = event;
    
    if(event == 1){
      this.ratingServiceLegend = "Terrible";
    }
    else if(event == 2){
      this.ratingServiceLegend = "Poor";
    }
    else if(event == 3){
      this.ratingServiceLegend = "Average";
    }
    else if(event == 4){
      this.ratingServiceLegend = "Very Good";
    }
    else if(event == 5){
      this.ratingServiceLegend = "Excellent";
    }
    else{this.ratingServiceLegend = "Please Click to Rate"}
  }

  onFacilitiesModelChange(event){
    this.ratingFacilities = event;
    
    if(event == 1){
      this.ratingFacilitiesLegend = "Terrible";
    }
    else if(event == 2){
      this.ratingFacilitiesLegend = "Poor";
    }
    else if(event == 3){
      this.ratingFacilitiesLegend = "Average";
    }
    else if(event == 4){
      this.ratingFacilitiesLegend = "Very Good";
    }
    else if(event == 5){
      this.ratingFacilitiesLegend = "Excellent";
    }
    else{this.ratingFacilitiesLegend = "Please Click to Rate"}
  }

  onLocationModelChange(event){
    this.ratingLocation = event;
    
    if(event == 1){
      this.ratingLocationLegend = "Terrible";
    }
    else if(event == 2){
      this.ratingLocationLegend = "Poor";
    }
    else if(event == 3){
      this.ratingLocationLegend = "Average";
    }
    else if(event == 4){
      this.ratingLocationLegend = "Very Good";
    }
    else if(event == 5){
      this.ratingLocationLegend = "Excellent";
    }
    else{this.ratingLocationLegend = "Please Click to Rate"}
  }

  onFoodsModelChange(event){
    this.ratingFoods = event;
    
    if(event == 1){
      this.ratingFoodsLegend = "Terrible";
    }
    else if(event == 2){
      this.ratingFoodsLegend = "Poor";
    }
    else if(event == 3){
      this.ratingFoodsLegend = "Average";
    }
    else if(event == 4){
      this.ratingFoodsLegend = "Very Good";
    }
    else if(event == 5){
      this.ratingFoodsLegend = "Excellent";
    }
    else{this.ratingFoodsLegend = "Please Click to Rate"}
  }

  onRoomsModelChange(event){
    this.ratingRooms = event;
    
    if(event == 1){
      this.ratingRoomsLegend = "Terrible";
    }
    else if(event == 2){
      this.ratingRoomsLegend = "Poor";
    }
    else if(event == 3){
      this.ratingRoomsLegend = "Average";
    }
    else if(event == 4){
      this.ratingRoomsLegend = "Very Good";
    }
    else if(event == 5){
      this.ratingRoomsLegend = "Excellent";
    }
    else{this.ratingRoomsLegend = "Please Click to Rate"}
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
