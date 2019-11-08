import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-func-events',
  templateUrl: 'func-events.html',
})
export class FuncEventsPage {

  @ViewChild('title') title;
  @ViewChild('desc') desc;
  selectedFile;
  imageUrl;
  validData;
  status;
  key;
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.key = navParams.data.key;
    this.status = navParams.data.status;
    this.initPost();
  }

  initPost(){
    if(this.status == true){
      let ref = firebase.database().ref('event');
      ref.on('value', data => {
        data.forEach(data => {
          if(data.key == this.key){
            this.data = {
              title: data.val().title,
              description: data.val().description,
              name: data.val().name,
              date: data.val().date,
              image: data.val().image
            }  
          }
        });
        console.log(this.data);
      });
    }
    else{
      console.log("This is not a data formed");
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  detectFiles(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  checkData(key){
    if(key){
      if(this.title.value == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "Event Title is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else if(this.desc.value == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "Event Description is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else{this.validData = false;}
    }
    else{
      if(this.data.title == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "Event Title is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else if(this.data.desc == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "Event Description is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else{this.validData = false;}
    }
  }

  addEvent(){
    this.checkData(true);
    if(!this.validData){
      let loading = this.loadingCtrl.create();
      loading.present();

      if(this.selectedFile){
        let file = this.selectedFile;
        let storageRef = firebase.storage().ref('/Events Picture/' + this.title.value +'/' + file.name);
        storageRef.put(file).then(snapshot => {
          return snapshot.ref.getDownloadURL();
        }).then(downloadURL => {
            console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
            this.imageUrl = downloadURL;
            loading.dismiss().then(() =>{
              this.viewCtrl.dismiss();
            });
            return downloadURL;
        }).catch(error => {
            console.log(`Failed to upload file and get link - ${error}`);
        });
      }
      else{
        this.imageUrl = null;
        loading.dismiss().then(() =>{
          this.viewCtrl.dismiss();
        });
      }

      loading.onDidDismiss(() => {
        let ref = firebase.database().ref('event');
        ref.push({
          title: this.title.value,
          description: this.desc.value,
          image: this.imageUrl
        }).then(() => {
          this.viewCtrl.dismiss();
        });
      });
    }
  }

  editEvent(){
    this.checkData(false);
    if(!this.validData){
      let ref = firebase.database().ref('event/' + this.key);
      let loading = this.loadingCtrl.create();
      loading.present();

      if(this.selectedFile){
        let file = this.selectedFile;
        let storageRef = firebase.storage().ref('/Events Picture/' + this.data.title  +'/' + file.name);
        storageRef.put(file).then(snapshot => {
          return snapshot.ref.getDownloadURL();
        }).then(downloadURL => {
            console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
            this.imageUrl = downloadURL;
            loading.dismiss().then(() =>{
              this.viewCtrl.dismiss();
            });
            return downloadURL;
        }).catch(error => {
            console.log(`Failed to upload file and get link - ${error}`);
        });
      }
      else{
        this.imageUrl = this.data.image;
        loading.dismiss().then(() =>{
          this.viewCtrl.dismiss();
        });
      }

      loading.onDidDismiss(() => {
        ref.set({
          title: this.data.title,
          description: this.data.description,
          image: this.imageUrl
        }).then(() => {
          this.viewCtrl.dismiss();
        });
      });
    }
  }
}
