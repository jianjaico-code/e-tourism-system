import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ModalController } from 'ionic-angular';
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
  selector: 'page-mapping',
  templateUrl: 'mapping.html',
})
export class MappingPage {

  @ViewChild('from') from;
  @ViewChild('to') to;
  @ViewChild('mappingOption') mappingOption;
  @ViewChild('map') mapElement: ElementRef;

  mobile;
  data;
  loadedData
  myPos;
  mappingEstTime;
  mappingDistance;
  fareShow: boolean;

  markers = [];
  directionsDisplays = [];

  readData;
  travelMode;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

  constructor(public navCtrl: NavController, private platform: Platform, public modalCtrl: ModalController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    if(this.platform.is('mobile')){
      this.mobile = true;
      
      platform.ready().then(() => {
        this.initMap();
      });
    }
    else{
      this.mobile = false;
      
      platform.ready().then(() => {
        this.initMap();
      });
    }

    this.getEstablishment();
    this.fareShow = false;
    this.travelMode = "DRIVING";
   
  }

  showFare(){
    let modal = this.modalCtrl.create('FarePage');
    modal.present();
  }
 
  initMap(){
    const me = this;
    navigator.geolocation.getCurrentPosition(location => {
      map = new google.maps.Map(me.mapElement.nativeElement, {
        zoom: 8.5,
        center: {lat: 8.8230, lng: 125.0976}
      });

      me.myPos = new google.maps.LatLng (location.coords.latitude, location.coords.longitude);
      var icon = {
        url: "../../assets/imgs/mylocationpin.png",
        scaledSize: new google.maps.Size(50, 60)
      }

      let myPosMarker = new google.maps.Marker({
        position: me.myPos,
        animation: google.maps.Animation.DROP,
        icon: icon,
        title: "Your Position"
      });

      myPosMarker.setMap(map);

    }, (error) => {
      console.log(error);
    }, options);
  }

  getEstablishment(){
    let ref = firebase.database().ref('establishment');
    ref.on('value', snapshot => {
      let arr = [];
      snapshot.forEach(snapshot => {
        if(snapshot.val().status == 1){
          arr.push({
            name: snapshot.val().name,
            latitude: snapshot.val().latitude,
            longitude: snapshot.val().longitude
          });
          console.log(snapshot.val());
        }
      });
      this.data = arr;
      this.loadedData = arr;
    });
  }

  initializeItem(): void{
    this.data = this.loadedData;
  }

  getItems(searchbar){
    this.initializeItem();
    let q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.data = this.data.filter(data => {
      if(data.name && q){
        if(data.name.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  initializeMapping(data){
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }

    let me = this;

    me.readData = data;

    let Establishment =  new google.maps.LatLng(data.latitude,data.longitude);
    me.directionsDisplay.setMap(null);

    var icon = {
      url: "../../assets/imgs/pin.png",
      scaledSize: new google.maps.Size(50, 60)
    };
    
    let marker = new google.maps.Marker({
      position: Establishment,
      animation: google.maps.Animation.DROP,
      icon: icon,
      title: data.name
    });

    me.markers = [];

    var request = {
      origin: me.myPos,
      destination: Establishment,
      travelMode: me.mappingOption.value,
      unitSystem: google.maps.UnitSystem.METRIC
    };

    me.directionsService.route(request, function(result, status) {
      if (status === 'OK') {

        me.directionsDisplay.setMap(map);

        me.directionsDisplay.setDirections(result);
        var point = result.routes[0].legs[0];
        console.log( 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')' );
        me.mappingEstTime = point.duration.text;
        me.mappingDistance = point.distance.text;

        marker.setMap(map);
        me.markers.push(marker);
      }
    });
  }

  changeData(event){

    this.mappingOption.value = event;

    if(this.readData){
      this.initializeMapping(this.readData);
    }
  }

}
