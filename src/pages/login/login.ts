import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, AlertController, ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsTouristPage } from '../tabs-tourist/tabs-tourist';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginForm:FormGroup;
  public loading:Loading;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private modalCtrl: ModalController, private afAuth: AngularFireAuth, public authData: AuthProvider, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  loginUser(){
    if (!this.loginForm.valid){
      var charles = this.alertCtrl.create({
        title: "Attention",
        subTitle: "Login Unsuccesfull please try again",
      });
      charles.present();
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        let ref = firebase.database().ref('user');
        ref.on('value', data =>{
          data.forEach(data =>{
            if(data.key == this.afAuth.auth.currentUser.uid){
              let user = data.val().usertypeid;
              if(user == 1){
                if(data.val().status == 1){
                  console.log("Tourist");
                  this.navCtrl.setRoot(TabsTouristPage).then(() =>{
                    this.loading.dismiss();
                  });
                }
                else{
                  this.errorAlert();
                }
              }
              else if(user == 2){
                if(data.val().status == 1){
                  console.log("BusinessmanPage");
                  this.navCtrl.setRoot(MenuPage,{
                    userPrivilage: 2,
                    key: data.key,
                    name: data.val().name,
                    pic: data.val().profilePicUrl
                  }).then(() =>{
                    this.loading.dismiss();
                  });
                }
                else{
                  this.errorAlert();
                }
              }
              else if(user == 3){
                console.log("Tourism Officer");
                this.navCtrl.setRoot(MenuPage, {
                  userPrivilage: 3,
                  key: data.key,
                  name: data.val().name,
                  pic: data.val().profilePicUrl
                }).then(() =>{
                  this.loading.dismiss();
                });
              }
              else if(user == 4){
                console.log("Super Admin")
              }
            }
          });
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
          this.authData.logoutUser();
        });
      });

      this.loading = this.loadingCtrl.create({
        content: "Logging In, Please Wait...",
      });
      this.loading.present();
    }
  }

  errorAlert(){
    this.loading.dismiss().then(() =>{
      let alert = this.alertCtrl.create({
        message: "Your account has been deactivated due to bad behaviour, please contact the Tourism Officer to re-activate your account: khomarlou11@gmail.com"
      });
      this.authData.logoutUser();
      alert.present();
    }); 
  }

  goToResetPassword(){
    let modal = this.modalCtrl.create('ResetPasswordPage');
    modal.present();
  }

  exit(){
    this.viewCtrl.dismiss();
  }

  signup(){
    let modal = this.modalCtrl.create('SignupPage', {key: true});
    modal.present();
  }

}