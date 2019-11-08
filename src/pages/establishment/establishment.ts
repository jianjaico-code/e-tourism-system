import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, IonicPage, ViewController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 60000
};

@IonicPage()
@Component({
  selector: 'page-establishment',
  templateUrl: 'establishment.html',
})
export class EstablishmentPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('rating') rating;
  @ViewChild('comments') comments;

  mobile;
  data;
  rate;
  cat;
  aveCleanliness;
  aveCleanlinessLabel;
  aveService;
  aveServiceLabel;
  aveFacilities;
  aveFacilitiesLabel;
  aveLocation;
  aveLocationLabel;
  aveFoods;
  aveFoodsLabel;
  aveRooms;
  aveRoomsLabel;
  images = [];
  averageRate;
  peopleRated;
  user;
  mappingEstTime;
  mappingDistance;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, private navParams: NavParams, public viewCtrl: ViewController, public platform: Platform, private authData: AuthProvider, private afAuth: AngularFireAuth) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
    
    platform.ready().then(() => { 
      this.user = navParams.data.user;
      this.initData();
      this.initRating();
      this.initMap();
      console.log(this.data);
    });  
  }

  close(){
    if(this.user == 2 || this.user == 3){
      this.navCtrl.pop();
    }
    else{this.navCtrl.setRoot('TouristPlacesPage');}
  }

  initData(){
    let ref = firebase.database().ref('category');
    ref.once('value', category => {
      category.forEach(category => {
        if(this.user == 2 || this.user == 3){
          if(this.navParams.data.data.category == category.val().name){
            this.cat = category.val().cat_val;
          }
        }
        else{
          if(this.navParams.data.category == category.val().name){
            this.cat = category.val().cat_val;
          }
        }
      });
    });
    if(this.user == 2 || this.user == 3){
      this.navParams.data.data.imageurl.forEach(element => {
        this.images.push(element);
      });
      this.data = {
        key: this.navParams.data.data.key,
        name: this.navParams.data.data.name,
        address: this.navParams.data.data.address,
        description: this.navParams.data.data.description,
        phone: this.navParams.data.data.phone,
        latitude: this.navParams.data.data.latitude,
        longitude: this.navParams.data.data.longitude,
        permits: this.navParams.data.data.permits,
        website: this.navParams.data.data.website,
        category: this.cat,
        status:  this.navParams.data.data.status,
        images: this.navParams.data.data.imageurl,
        userEmail: this.navParams.data.data.userEmail,
        userType: this.navParams.data.data.userType
      }
    }
    else{
      this.navParams.data.imageurl.forEach(element => {
        this.images.push(element);
      });
      this.data = {
        key: this.navParams.data.key,
        name: this.navParams.data.name,
        address: this.navParams.data.address,
        description: this.navParams.data.description,
        permits: this.navParams.data.permits,
        phone: this.navParams.data.phone,
        latitude: this.navParams.data.latitude,
        longitude: this.navParams.data.longitude,
        website: this.navParams.data.website,
        category: this.cat,
        status:  this.navParams.data.status,
        images: this.navParams.data.imageurl,
        userEmail: this.navParams.data.userEmail,
        userType: this.navParams.data.userType
      }
    }
  }

  messageOwner(){
    let modal = this.modalCtrl.create('TouristMessageToBusinessmanPage',  this.data);
    modal.present();
  }

  viewPermit(value){
    let modal = this.modalCtrl.create('ViewPermitPage', value);
    modal.present();
  }

  initMap() {
    let me = this;

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
    let Establishment = new google.maps.LatLng(me.data.latitude, me.data.longitude);

    navigator.geolocation.getCurrentPosition(location => {
      console.log(location);
      map = new google.maps.Map(me.mapElement.nativeElement, {
        center: Establishment,
        zoom: 8.5,
      });

      let myPos = new google.maps.LatLng (location.coords.latitude, location.coords.longitude);
      var myIcon = {
        url: "../../assets/imgs/mylocationpin.png",
        scaledSize: new google.maps.Size(50, 60)
      }

      let myPosMarker = new google.maps.Marker({
        position: myPos,
        animation: google.maps.Animation.DROP,
        icon: myIcon,
        title: "Your Position"
      });

      var icon = {
        url: "../../assets/imgs/pin.png",
        scaledSize: new google.maps.Size(50, 60)
      };
      
      let marker = new google.maps.Marker({
        position: Establishment,
        animation: google.maps.Animation.DROP,
        icon: icon,
        title: me.data.name
      });

      marker.addListener('click', function() {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
      });

      myPosMarker.setMap(map);
      marker.setMap(map);
      directionsDisplay.setMap(map);
  
      var request = {
        origin: myPos,
        destination: Establishment,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
          var point = result.routes[0].legs[0];
          console.log( 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')' );
          me.mappingEstTime = point.duration.text;
          me.mappingDistance = point.distance.text;
        }
      });
      
    }, (error) => {
      console.log(error);
    }, options);
  }

  edit(key, user, status){
    let modal = this.modalCtrl.create('FuncPlacesPage', {key: key, user: user, status: status});
    modal.present();
  }

  initRating(){
    let ref = firebase.database().ref('rating');
    ref.on('value', data =>{
      let arr = [];
      data.forEach(data => {
        if(data.val().establishmentKey == this.data.key){
          arr.push({
            key: data.key,
            establishmentKey: data.val().establishmentKey,
            comments: data.val().comments,
            email: data.val().email,
            establishment: data.val().establishmentName,
            profilePic: data.val().profilePic,
            cleanlinessRating: data.val().cleanlinessRating,
            serviceRating: data.val().serviceRating,
            facilitiesRating: data.val().facilitiesRating,
            locationRating: data.val().locationRating,
            foodsRating: data.val().foodsRating,
            roomsRating: data.val().roomsRating,
            rating: data.val().rating
          });
        }
      });
      this.rate = arr.reverse();
      this.peopleRated = this.rate.length;
      this.getAverageRating();
      this.setNewData();
    });
  }

  getAverageRating(){
    let rating = [];
    let cleanliness = [];
    let service = [];
    let facilities = [];
    let location = [];
    let foods = [];
    let rooms = [];
    
    this.rate.map(data =>{
      return cleanliness.push(data.cleanlinessRating);
    });

    this.rate.map(data =>{
      return service.push(data.serviceRating);
    });

    this.rate.map(data =>{
      return facilities.push(data.facilitiesRating);
    });

    this.rate.map(data =>{
      return location.push(data.locationRating);
    });

    this.rate.map(data =>{
      return foods.push(data.foodsRating);
    });

    this.rate.map(data =>{
      return rooms.push(data.roomsRating);
    });

    this.rate.map(data =>{
      return rating.push(data.rating);
    });


    if(rating.length == 0){ 
      this.aveCleanliness = 0;
      this.aveService = 0;
      this.aveFacilities = 0;
      this.aveLocation = 0;
      this.aveFoods = 0;
      this.aveRooms = 0;
      this.averageRate = 0;
    }
    else {
      let aveCleanliness = cleanliness.reduce((total, score) => total + score) / cleanliness.length;
      let aveService = service.reduce((total, score) => total + score) / service.length;
      let aveFacilities = facilities.reduce((total, score) => total + score) / facilities.length;
      let aveLocation = location.reduce((total, score) => total + score) / location.length;
      let aveFoods = foods.reduce((total, score) => total + score) / foods.length;
      let aveRooms = rooms.reduce((total, score) => total + score) / rooms.length;
      let rate = rating.reduce((total, score) => total + score) / rating.length;

      this.aveCleanliness = Math.round(aveCleanliness);
      this.aveCleanlinessLabel = aveCleanliness.toFixed(2);
      this.aveService = Math.round(aveService);
      this.aveServiceLabel = aveService.toFixed(2);
      this.aveFacilities = Math.round(aveFacilities);
      this.aveFacilitiesLabel = aveFacilities.toFixed(2);
      this.aveLocation = Math.round(aveLocation);
      this.aveLocationLabel = aveLocation.toFixed(2);
      this.aveFoods = Math.round(aveFoods);
      this.aveFoodsLabel = aveFoods.toFixed(2);
      this.aveRooms = Math.round(aveRooms);
      this.aveRoomsLabel = aveRooms.toFixed(2);
      this.averageRate = Math.round(rate);
    }
  }

  setNewData(){
    let ref = firebase.database().ref('establishment/' + this.data.key);
    ref.set({
      name: this.data.name,
      address: this.data.address,
      description: this.data.description,
      phone: this.data.phone,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      website: this.data.website,
      permits: this.data.permits,
      category: this.cat,
      status:  this.data.status,
      images: this.images,
      averageRate: this.averageRate,
      peopleRated: this.peopleRated,
      userEmail: this.data.userEmail,
      userType: this.data.userType
    });
  }

  addRating(){
    let modal = this.modalCtrl.create('AddRatePage', this.data);
    modal.present();
  }

  viewProdandService(){
    let alert = this.alertCtrl.create({
      message: "What do you want to view?",
      buttons: [
        {
          text: "Product",
          handler: () => {
            let modal = this.modalCtrl.create('ViewProductServicePage', {key: this.data.key, view: 1});
            modal.present(); 
          }
        },
        {
          text: "Service",
          handler: () => {
            let modal = this.modalCtrl.create('ViewProductServicePage', {key: this.data.key, view: 2});
            modal.present();
          }
        }
      ]
    });
    alert.present();
  }

  addProdSer(){
    let alert = this.alertCtrl.create({
      message: "What do you want to Add?",
      buttons: [
        {
          text: "Product",
          handler: () => {
            let modal = this.modalCtrl.create('AddProductPage', {key: this.data.key});
            modal.present(); 
          }
        },
        {
          text: "Service",
          handler: () => {
            let modal = this.modalCtrl.create('AddServicePage', {key: this.data.key});
            modal.present();
          }
        }
      ]
    });
    alert.present();
  }
}
