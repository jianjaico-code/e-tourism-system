import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App, LoadingController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { BusinessmanPage } from '../businessman/businessman';
import { MainPage } from '../main/main';
import { AdminPage } from '../admin/admin';
 
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any;
  pages = [];
 
  @ViewChild(Nav) nav: Nav;
  privilage;
  info;
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public data: NavParams, private loadingCtrl: LoadingController, public authData: AuthProvider) {
    this.privilage = this.data.data.userPrivilage;
    this.initUser();
  }
 
  ionViewWillEnter() {
    if(this.privilage == 3){
      this.openPage(AdminPage);
    } 
    else if(this.privilage == 2){
       this.openPage(BusinessmanPage);
    }
  }

  initUser(){
    this.info = {
      name: this.data.data.name,
      pic: this.data.data.pic,
      privilage: this.privilage
    }

    if(this.privilage == 3){
      this.pages = [
        { title: 'Users', page: AdminPage, icon: 'ios-people' },
        { title: 'Events', page: 'AddEventPage', icon: 'ios-football' },
        { title: 'News', page: 'AddNewsPage', icon: 'globe'},
        { title: 'Places', page: 'AddEstablishmentPage', icon: 'map'},
        { title: 'Messages', page: 'MessageListPage', icon: 'chatbubbles'}
      ];
    }
    else if(this.privilage == 2){
      this.pages = [
        { title: 'Home', page: BusinessmanPage, icon: 'home' },
        { title: 'Messages', page: 'MessageListPage', icon: 'chatbubbles'}
      ];
    }
  }
 
  logout() {
    this.authData.logoutUser().then(()=>{
      let loading = this.loadingCtrl.create();
    
      loading.present();
    
      this.authData.logoutUser().then(() => {
        this.nav.setRoot(MainPage);
        setTimeout(() => {
          location.reload();
        }, 200);
      });
    });
  }
 
  openPage(page) {
    this.nav.setRoot(page);
  }

  editProfile(){
    let modal = this.modalCtrl.create('EditProfilePage', {key: this.data.data.key});
    modal.present();
  }
}

// if (this.authProvider.isAdmin()) {
//   this.pages = [
//     { title: 'Admin Dashboard', page: 'AdminPage', icon: 'home' },
//     { title: 'Admin Second Page', page: 'AdminSecondPage', icon: 'planet' }
//   ];
//   this.openPage('AdminPage');
// } else {
//   this.pages = [
//     { title: 'User Dashboard', page: 'UserPage', icon: 'home' },
//     { title: 'User Second Page', page: 'UserSecondPage', icon: 'planet' }
//   ];
//   this.openPage('UserPage');
// }
// this.username = this.authProvider.currentUser.name;