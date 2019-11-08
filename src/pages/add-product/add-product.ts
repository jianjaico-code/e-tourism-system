import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  @ViewChild('prodPrice') price;
  @ViewChild('prodName') name;
  selectedFiles;
  key;
  dataArr;
  data;
  editStatus: boolean;
  obj: boolean = false;
  image;
  imageUrl;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.key = navParams.data.key;
    this.initData();
    this.getData();
  }

  initData(){
    this.editStatus = false;
    this.data = {
      name: "",
      price: "",
    }
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files[0];
  }

  getData(){
    let ref = firebase.database().ref('product');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        if(data.val().establishmentKey == this.key){
          arr.push({
            key: data.key,
            establishmentKey: data.val().establishmentKey,
            name: data.val().name,
            price: data.val().price,
            imageUrl: data.val().imageUrl
          });
          this.obj = true;
        }
      });
      this.dataArr = arr;
      
    });
  }

  edit(key){
    this.data = key;
    this.editStatus = true;
  }

  update(key){
    let ref = firebase.database().ref('product/' + key);
    let loading = this.loadingCtrl.create();
    loading.present();

    if(this.selectedFiles){
      let file = this.selectedFiles;
      let storageRef = firebase.storage().ref('/ProductPic/' + file.name);
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
      this.imageUrl = this.data.imageUrl;
      loading.dismiss().then(() =>{
        this.initData();
      });
    }

    loading.onDidDismiss(() => {
      ref.set({
        establishmentKey: this.key,
        name: this.name.value,
        price: this.price.value,
        imageUrl: this.imageUrl
      });
    });
  }

  savePhotoStorage(){
    let loading = this.loadingCtrl.create();
    loading.present();
    let file = this.selectedFiles;
    let storageRef = firebase.storage().ref('/ProductPic/' +file.name);
    storageRef.put(file).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
        console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
        this.image = downloadURL;
        loading.dismiss();
        return downloadURL;
    }).catch(error => {
        console.log(`Failed to upload file and get link - ${error}`);
    });

    loading.onDidDismiss(() =>{
      let ref = firebase.database().ref('product');
      ref.push({
        establishmentKey: this.key,
        name: this.name.value,
        price: this.price.value,
        imageUrl: this.image
      });

      let toast = this.toastCtrl.create({
        message: 'Succesfully Added',
        duration: 3000,
        position: 'top',
        cssClass: 'dark-trans',
      });
      toast.present();

      this.name.value = "";
      this.price.value = "";
      this.selectedFiles = "";
    });
  }

  exit(){
    this.viewCtrl.dismiss();
  }

}
