import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-func-news',
  templateUrl: 'func-news.html',
})
export class FuncNewsPage {

  @ViewChild('postDesc') desc;
  @ViewChild('postTitle') title;
  selectedFile;
  myDate: String = new Date().toISOString();
  name;
  imageUrl;
  validData;
  key;
  data;
  status;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public viewCtrl: ViewController, public afAuth: AngularFireAuth) {
    this.key = navParams.data.key;
    this.status = navParams.data.status;
    
    this.initData();
    this.checkUser();
  }

  initData(){
    if(this.status == true){
      let ref = firebase.database().ref('postNews');
      ref.on('value', data => {
        data.forEach(data => {
          if(this.key == data.key){
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

  checkUser(){
    let ref = firebase.database().ref('user');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.val().email == this.afAuth.auth.currentUser.email){
          this.name = data.val().name;
        }
      });
    });
  }

  detectFiles(event) {
    this.selectedFile = event.target.files[0];
  }

  checkData(key){
    if(key){
      if(this.title.value == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "News Title is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else if(this.desc.value == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "News Description is Empty",
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
          subTitle: "News Title is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else if(this.data.desc == ""){
        this.validData = true;
        let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "News Description is Empty",
          buttons: ['OK']
        });
        alert.present();
      }
      else{this.validData = false;}
    }
  }

  savePost(){
    let ref = firebase.database().ref('postNews');
    this.checkData(true);
    if(!this.validData){
      let loading = this.loadingCtrl.create();
      loading.present();

      if(this.selectedFile){
        let file = this.selectedFile;
        let storageRef = firebase.storage().ref('/News Picture/'  + this.title.value +'/' + file.name);
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
        ref.push({
          title: this.title.value,
          name: this.name,
          description: this.desc.value,
          image: this.imageUrl,
          date: this.myDate
        });
      });
    }
  }

  updatePost(){
    this.checkData(false);
    if(!this.validData){
      let ref = firebase.database().ref('postNews/' + this.key);
      let loading = this.loadingCtrl.create();
      loading.present();

      if(this.selectedFile){
        let file = this.selectedFile;
        let storageRef = firebase.storage().ref('/News Picture/'  + this.data.title +'/' + file.name);
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
          name: this.data.name,
          description: this.data.description,
          image: this.imageUrl,
          title: this.data.title,
          date: this.data.date,
        });
      });
    }
  }

  removePost(){
    let ref = firebase.database().ref('postNews/' +  this.key);
    let alert = this.alertCtrl.create({
      message: 'Are you sure you want to REMOVE this Post?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => { 
             ref.remove().then(() => {
              this.viewCtrl.dismiss();
             });
          }
        }
      ]
    });
    alert.present();
  }

}
