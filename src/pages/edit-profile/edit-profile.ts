import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  @ViewChild('fileInput') fileInput;
  @ViewChild('address') address;
  @ViewChild('fullname') name;
  @ViewChild('password') password;
  profilePic;
  userEmail;
  key;
  data;
  private caption: string = "EDIT";
  private isDisabled: boolean = true;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public loadingCtrl: LoadingController, public afAuth: AngularFireAuth) {
    this.profilePic = this.afAuth.auth.currentUser.photoURL;
    this.userEmail = this.afAuth.auth.currentUser.email;
    this.getUserInfo();
  }

  editProfile(){
    if(this.caption == "EDIT"){
      this.caption = "SAVE";
      this.isDisabled = false;
    }
    else if(this.caption == "SAVE"){
      this.caption = "EDIT";
      this.isDisabled = true;
      this.saveUserData();
    }
  }

  getPicture() {
    this.fileInput.nativeElement.click();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  saveUserData(){
  let passRef = this.afAuth.auth.currentUser;
    if(this.password.value != ""){  
    passRef.updatePassword(this.password.value).then(function() {
      console.log("Update successful")
    }).catch(function(error) {
      console.log("Error in - " + error);
    });
    }
    
    let ref = firebase.database().ref('user/' + this.key);
    ref.set({
      name: this.name.value,
      email: this.afAuth.auth.currentUser.email,
      profilePicUrl: this.data.profilePicUrl,
      address: this.address.value,
      status: this.data.status,
      usertypeid: this.data.usertypeid
    });
  }

  detectFiles(event) {
    let profilePic;
    let loading = this.loadingCtrl.create();
    loading.present();

    let imageData = event.target.files[0];
    let refProfile = firebase.storage().ref('/User Picture/' + imageData.name);
    refProfile.put(imageData).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
        console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
        profilePic = downloadURL;
        loading.dismiss();
        return downloadURL;
    }).catch(error => {
        loading.dismiss();
        console.log(`Failed to upload file and get link - ${error}`);
    });

    loading.onDidDismiss(() => {
      let user = firebase.auth().currentUser;
      
      user.updateProfile({
        displayName: this.name.value,
        photoURL: profilePic
      }).then(function() {
        console.log("Update Successful");
      }).catch(function(error) {
        console.log("Erorr in - " + error);
      });

      let ref = firebase.database().ref('user/' + this.key);
      ref.set({
        name: this.name.value,
        email: this.afAuth.auth.currentUser.email,
        profilePicUrl: profilePic,
        address: this.address.value,
        status: this.data.status,
        usertypeid: this.data.usertypeid
      });
    });
  }
  
  getUserInfo(){
    let ref = firebase.database().ref('user');
    ref.on('value', data => {
      data.forEach(data => {
        if(data.val().email == this.userEmail){
          this.key = data.key;
          this.data = data.val();
        }
      });
      console.log(this.data);
    });
  }

}
