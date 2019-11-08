import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import * as _ from "lodash";
import { AngularFireAuth } from 'angularfire2/auth';

declare var google;
let map: any;
@IonicPage()
@Component({
  selector: 'page-func-places',
  templateUrl: 'func-places.html',
})
export class FuncPlacesPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('fileInput') fileInput;

  @ViewChild('estname') name;
  @ViewChild('estaddress') address;
  @ViewChild('estwebsite') website;
  @ViewChild('estphone') phone;
  @ViewChild('estdescription') description;
  @ViewChild('eststatus') placeStatus;
  @ViewChild('latVal') latVal;
  @ViewChild('longVal') longVal;  

  key;
  status;
  userType;
  position
  selectedFiles;
  selectedFilesAttachement;
  uploadLoad;
  imageValidator;
  arrImage = [];
  permitsArrImage = [];
  validData;
  category;
  categoryDesc;
  user;
  data;
  images;
  categoryVal;
  updatePicture: boolean;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.key = navParams.data.key;
    this.status = navParams.data.status;
    this.userType = navParams.data.user;
    this.user = afAuth.auth.currentUser.email;
    this.initData();
    this.initCategory();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  initCategory(){
    let ref = firebase.database().ref('category');
    ref.on('value', category => {
      let arr = [];
      category.forEach(category => {
        if(this.userType == 2){
          if(category.val().name != "Landmark"){
            arr.push(category.val());
          }
        }
      });
      this.categoryVal = arr;
    });
  }

  initData(){
    if(this.status){
      let ref = firebase.database().ref('establishment');
      ref.on('value', data => {
        data.forEach(data => {
          if(data.key == this.key){
            this.data = {
              key: data.key,
              name: data.val().name,  
              address: data.val().address,
              latitude: data.val().latitude,
              longitude: data.val().longitude,
              website: data.val().website,
              images: data.val().images,
              phone: data.val().phone,
              permits: data.val().permits,
              description: data.val().description,
              userEmail: data.val().userEmail,
              userType: data.val().userType,
              category: data.val().category,
              status: data.val().status,
              averageRate: data.val().averageRate,
              peopleRated: data.val().peopleRated
            }
          }
        });
      });
    }
    else{
      this.initMap();
      console.log("This is not a data formed");
    }
  }

  getPicture() {
    let alert = this.alertCtrl.create({
      message: 'Do you want to update existing etablishment pictures?',
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.updatePicture = true;
            this.fileInput.nativeElement.click();
          }
        },
        {
          text: 'No',
          handler: () =>{
            this.updatePicture = false;
            this.fileInput.nativeElement.click();
          }
        }
      ],
    });
    alert.present();     
  }

  initMap() {
    let Gingoog = {lat: 8.8230, lng: 125.0976}
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: Gingoog,
        zoom: 15
      });

      let newPos = {
        lat: null,
        lng: null
      }

      map.addListener('click', function(e) {
        newPos.lat = e.latLng.lat();
        newPos.lng = e.latLng.lng();
        let pos = {lat: newPos.lat, lng: newPos.lng}
        console.log(pos);
        let marker = new google.maps.Marker({
          position: pos,
          animation:google.maps.Animation.DROP
        });
        marker.setMap(map);
        
        $('#latVal').val(pos.lat);
        $('#longVal').val(pos.lng);
      });

      this.position = newPos;
    });
  }

  pin(){
    let Gingoog = new google.maps.LatLng($('#latVal').val(), $('#longVal').val());
    map = new google.maps.Map(this.mapElement.nativeElement, {
      center: Gingoog,
      zoom: 15
    });
  
    let marker = new google.maps.Marker({
      position: Gingoog,
      animation:google.maps.Animation.DROP
    });
    marker.setMap(map);
    
    this.position = {lat: $('#latVal').val(), lng: $('#longVal').val()};
  }
  
  showCategory(){
    let ref = firebase.database().ref('category');
    let alert = this.alertCtrl.create();
    alert.setTitle('Category');
    ref.on('value', snapshot => {
      snapshot.forEach(snapshot => {
        if(this.userType == 2){
          if(snapshot.val().cat_val != 4){
            alert.addInput({
              type: 'radio',
              label: snapshot.val().name,
              value: snapshot.val().cat_val,
              checked: false
            });
          }
        }
      });
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.category = data;
        ref.once('value', category => {
          category.forEach(category => {
            if(data == category.val().cat_val){
              this.categoryDesc = category.val().name;
            }
          });
        });
      }
    });
    alert.present();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  detectFilesAttachment(event){
    this.selectedFilesAttachement = event.target.files;
  }

  savePhotoToStorageAttachment(){
    if(!this.status){
      let files = this.selectedFilesAttachement;

      _.range(files.length);
      _.each(files, (idx) => {
        let storageRef = firebase.storage().ref('/Establishment Permits Picture/' + this.name.value +'/'+ idx.name);
        storageRef.put(idx).then(snapshot => {
          return snapshot.ref.getDownloadURL();
        }).then(downloadURL => {
          console.log(`Successfully uploaded file and got download link for Permits - ${downloadURL}`);
          this.permitsArrImage.push(downloadURL);
          return downloadURL;
        }).catch(error => {
          let alert = this.alertCtrl.create({
            message: "Failed to upload permit files... Please Try Again..."
          });
          alert.present();
          console.log(`Failed to upload file and get link - ${error}`);
        });
      });
    }
  }

  savePhotoToStorage(){
    if(!this.status){
      this.uploadLoad = this.loadingCtrl.create({
        content: 'Setting up some things...'
      });
      this.uploadLoad.present();
      if(this.userType == 2){
        this.savePhotoToStorageAttachment();
        let files = this.selectedFiles;
        _.range(files.length);
        _.each(files, (idx) => {
          console.log(idx);
          let storageRef = firebase.storage().ref('/Establishment Picture/' + this.name.value +'/'+ idx.name);
          storageRef.put(idx).then(snapshot => {
            return snapshot.ref.getDownloadURL();
          }).then(downloadURL => {
            console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
            this.arrImage.push(downloadURL);
            return downloadURL;
          }).catch(error => {
            this.uploadLoad.dismiss();
            let alert = this.alertCtrl.create({
              message: "Failed to upload file... Please Try Again..."
            });
            alert.present();
              console.log(`Failed to upload file and get link - ${error}`);
          });
        });
      
        this.imageValidator = setInterval(()=>{
          this.validatingUploadedImages();
          console.log(this.arrImage.length);
        }, 1000);
      }
      else{
        let files = this.selectedFiles;
        _.range(files.length);
        _.each(files, (idx) => {
          console.log(idx);
          let storageRef = firebase.storage().ref('/Establishment Picture/' + this.name.value +'/'+ idx.name);
          storageRef.put(idx).then(snapshot => {
            return snapshot.ref.getDownloadURL();
          }).then(downloadURL => {
            console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
            this.arrImage.push(downloadURL);
            return downloadURL;
          }).catch(error => {
            this.uploadLoad.dismiss();
            let alert = this.alertCtrl.create({
              message: "Failed to upload file... Please Try Again..."
            });
            alert.present();
              console.log(`Failed to upload file and get link - ${error}`);
          });
        });
      
        this.imageValidator = setInterval(()=>{
          this.validatingUploadedImages();
          console.log(this.arrImage.length);
        }, 1000);
      }
    }


    else{
      this.uploadLoad = this.loadingCtrl.create({
        content: 'Setting up some things...'
      });
      this.uploadLoad.present();
      let files = this.selectedFiles;
      _.range(files.length);
      _.each(files, (idx) => {
        console.log(idx);
        let storageRef = firebase.storage().ref('/Establishment Picture/' + this.data.name +'/'+ idx.name);
        storageRef.put(idx).then(snapshot => {
          return snapshot.ref.getDownloadURL();
        }).then(downloadURL => {
          console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
          this.arrImage.push(downloadURL);
          return downloadURL;
        }).catch(error => {
          this.uploadLoad.dismiss();
          let alert = this.alertCtrl.create({
            message: "Failed to upload file... Please Try Again..."
          });
          alert.present();
            console.log(`Failed to upload file and get link - ${error}`);
        });
      });
      
      this.imageValidator = setInterval(()=>{
        this.validatingUploadedImages();
        console.log(this.arrImage.length);
      }, 1000);
    }
  }

  validatingUploadedImages(){
    if(this.userType == 2){
      if(!this.status){
        if(this.selectedFiles.length == this.arrImage.length && this.selectedFilesAttachement.length == this.permitsArrImage.length){
          this.uploadLoad.dismiss().then(() => {
            this.stopImageValidator();
            this.uploadLoad.dismiss();
            this.viewCtrl.dismiss();
          });
        }
      }
      else{
        if(this.selectedFiles.length == this.arrImage.length){
          this.uploadLoad.dismiss().then(() => {
            this.stopImageValidator();
            this.uploadLoad.dismiss();
            this.viewCtrl.dismiss();
          });
        }
      }
    }
    else{
      if(this.selectedFiles.length == this.arrImage.length){
        this.uploadLoad.dismiss().then(() => {
          this.stopImageValidator();
          this.uploadLoad.dismiss();
          this.viewCtrl.dismiss();
        });
      }
    }
  }

  stopImageValidator(){
    clearInterval(this.imageValidator);
  }

  checkData(key){
    if(key){
      if(this.userType == 3){
        if(this.name.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Name is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.address.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Address is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.description.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Description is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.status.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Please choose a Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else{this.validData = false;}
      }
      else{
        if(this.name.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Name is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.address.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Address is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.phone.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Phone Number is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.description.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Description is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.category.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Please choose a Category",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.status.value == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Please choose a Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else{this.validData = false;}
      }
    }
    else{
      if(this.userType == 3){
        if(this.data.name == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Name is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.address == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Address is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.description == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Description is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.status == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Please choose a Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else{this.validData = false;}
      }
      else{
        if(this.data.name == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Name is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.address == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Address is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.phone == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Phone Number is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.description == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Establishment Description is Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.category == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Please choose a Category",
            buttons: ['OK']
          });
          alert.present();
        }
        else if(this.data.status == ""){
          this.validData = true;
          let alert = this.alertCtrl.create({
            title: "Attention",
            subTitle: "Please choose a Empty",
            buttons: ['OK']
          });
          alert.present();
        }
        else{this.validData = false;}
      }
    }
  }

  saveEstablishment(){
    this.checkData(true);
    if(!this.validData){
      if(this.selectedFiles.length < 3){
        let alert = this.alertCtrl.create({
          message: "Please add 3 or more.",
          buttons: ["Ok"]
        });
        alert.present();
      }
      else{
        this.savePhotoToStorage();
        this.uploadLoad.onDidDismiss(()=>{
          let ref = firebase.database().ref('establishment');
          if(this.userType == 3){ 
            ref.push({
              name: this.name.value,  
              address: this.address.value,
              latitude: this.position.lat,
              longitude: this.position.lng,
              website: "",
              images: this.arrImage,
              permits: "",
              phone: "",
              description: this.description.value,
              category: "4",
              userEmail: this.user,
              userType: this.userType,
              status: this.placeStatus.value,
              averageRate: "0",
              peopleRated: "0"
            }).then(() => {   
              // this.viewCtrl.dismiss();
            });
          }
          else{
            ref.push({
              name: this.name.value,  
              address: this.address.value,
              latitude: this.position.lat,
              longitude: this.position.lng,
              website: this.website.value,
              images: this.arrImage,
              permits: this.permitsArrImage,
              phone: this.phone.value,
              description: this.description.value,
              category: this.category,
              userEmail: this.user,
              userType: this.userType,
              status: "2",
              averageRate: "0",
              peopleRated: "0"
            }).then(() => {   
              // this.viewCtrl.dismiss();
            });
          }
        });
      }
    }
  } 

  updateEstablishment(){
    let ref = firebase.database().ref('establishment/' + this.key);

    this.checkData(false);
    if(!this.validData){
      if(!this.selectedFiles){

        this.uploadLoad = this.loadingCtrl.create();
        this.uploadLoad.present();

        this.images = this.data.images;
        this.uploadLoad.dismiss();
        this.viewCtrl.dismiss();
        
        this.uploadLoad.onDidDismiss(() => {
          ref.set({
            name: this.data.name,  
            address: this.data.address,
            website: this.data.website,
            latitude: this.data.latitude,
            longitude: this.data.longitude,
            permits: this.data.permits,
            images: this.images,
            phone: this.data.phone,
            description: this.data.description,
            category: this.data.category,
            status: this.data.status,
            userEmail: this.data.userEmail,
            userType: this.data.userType,
            averageRate: this.data.averageRate,
            peopleRated: this.data.peopleRated
          });
        });
      }
      else{
        if(this.updatePicture){
          this.savePhotoToStorage();

          this.uploadLoad.onDidDismiss(() => {
            this.arrImage.forEach(element => {
              this.data.images.push(element);
            });
  
            this.images =  this.data.images;
            
            ref.set({
              name: this.data.name,  
              address: this.data.address,
              website: this.data.website,
              latitude: this.data.latitude,
              longitude: this.data.longitude,
              images: this.images,
              phone: this.data.phone,
              permits: this.data.permits,
              description: this.data.description,
              category: this.data.category,
              status: this.data.status,
              userEmail: this.data.userEmail,
              userType: this.data.userType,
              averageRate: this.data.averageRate,
              peopleRated: this.data.peopleRated
            });
          });
        }
        else{
          if(this.selectedFiles.length < 3){
            let alert = this.alertCtrl.create({
              message: "Please add 3 or more.",
              buttons: ["Ok"]
            });
            alert.present();
          }
          else{
            this.savePhotoToStorage();

            this.uploadLoad.onDidDismiss(() => {
              this.images = this.arrImage;
              ref.set({
                name: this.data.name,  
                address: this.data.address,
                website: this.data.website,
                latitude: this.data.latitude,
                longitude: this.data.longitude,
                images: this.images,
                permits: this.data.permits,
                phone: this.data.phone,
                description: this.data.description,
                category: this.data.category,
                status: this.data.status,
                userEmail: this.data.userEmail,
                userType: this.data.userType,
                averageRate: this.data.averageRate,
                peopleRated: this.data.peopleRated
              });
            });
          }
        }
      }
    }
  }

}
