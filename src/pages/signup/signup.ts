import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, LoadingController, AlertController, ViewController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from '../main/main';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm: FormGroup;

  @ViewChild("name") name;
  @ViewChild("address") address;
  @ViewChild("usertypeid") usertypeid;
  @ViewChild("status") status;
  @ViewChild("email") email;
  @ViewChild("password") password;
  
  ref;
  loading;
  mobile;

  validData: boolean;

  constructor(public nav: NavController, public platform: Platform, private toastCtrl: ToastController, public navParams: NavParams, private modalCtrl: ModalController, private viewCtrl: ViewController, private afAuth: AngularFireAuth, public authData: AuthProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    if(this.platform.is('mobile')){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
    
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  signupUser(){
    this.checkData();
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } 
    else {
      if(!this.validData){
        this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
          let user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: this.name.value,
            photoURL: "https://firebasestorage.googleapis.com/v0/b/onlinetourist.appspot.com/o/system%2Fhd-avatar.png?alt=media&token=7b90ff0a-f139-4503-b199-18839ee7bccb"
          }).then(function() {
            console.log("Update Successful");
          }).catch(function(error) {
            console.log("Erorr in - " + error);
          });

          this.ref = firebase.database().ref(`user/` + this.afAuth.auth.currentUser.uid);
          if(this.usertypeid.value == 2){
            this.ref.set({
              email: this.email.value,
              name: this.name.value,
              profilePicUrl: "https://firebasestorage.googleapis.com/v0/b/onlinetourist.appspot.com/o/system%2Fhd-avatar.png?alt=media&token=7b90ff0a-f139-4503-b199-18839ee7bccb",
              address: this.address.value,
              usertypeid: this.usertypeid.value,
              status: "2"
            }).then(()=>{
              this.loading.dismiss()
              let toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'top'
              });
              toast.present();
              this.nav.setRoot(MainPage)
            });
          }
          else{
            this.ref.set({
              email: this.email.value,
              name: this.name.value,
              profilePicUrl: "https://firebasestorage.googleapis.com/v0/b/onlinetourist.appspot.com/o/system%2Fhd-avatar.png?alt=media&token=7b90ff0a-f139-4503-b199-18839ee7bccb",
              address: this.address.value,
              usertypeid: this.usertypeid.value,
              status: "1"
            }).then(()=>{
              this.loading.dismiss()
              this.nav.setRoot(MainPage)
              let toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'top'
              });
              toast.present();
            });
          }
        }, (error) => {
          this.loading.dismiss().then( () => {
            var errorMessage: string = error.message;
              let alert = this.alertCtrl.create({
                message: errorMessage,
                buttons: [
                  {
                    text: "Ok",
                    role: 'cancel'
                  }
                ]
              });
            alert.present();
          });
        });
        this.loading.present();
      }
    }
  }

  exit(){
    this.viewCtrl.dismiss();
  }

  login(){
    if(this.navParams.data.key){
      this.viewCtrl.dismiss();
    }
    else{
      let modal = this.modalCtrl.create('LoginPage');
      modal.present().then(() => {
        this.viewCtrl.dismiss();
      });
    }
  }

  checkData(){
    if(this.name.value == ""){
      this.validData = true;
      let alert = this.alertCtrl.create({
        title: "Attention",
        subTitle: "Name is Empty",
        buttons: ['OK']
      });
      alert.present();
    }else if(this.address.value == ""){
      this.validData = true;
      let alert = this.alertCtrl.create({
        title: "Attention",
        subTitle: "Address is Empty",
        buttons: ['OK']
      });
      alert.present();
    }else if(this.usertypeid.value == ""){
      this.validData = true;
      let alert = this.alertCtrl.create({
        title: "Attention",
        subTitle: "Please choose a Type of Account",
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      this.validData = false;
    }
  }
}