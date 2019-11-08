import { Component } from '@angular/core';
import { Platform, NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs-tourist.html'
})
export class TabsTouristPage {

tabsPlacement: string = 'top';
tabsLayout: string = 'title-hide';

tab1Root = HomePage;
tab2Root = 'TouristPlacesPage';
tab3Root = 'TouristProfilePage';
tab4Root = 'TouristEventsPage';
tab5Root = 'MessageListTouristPage';
tab6Root = 'MappingPage';

  constructor(public platform: Platform,public modalCtrl: ModalController, private authData: AuthProvider, public navCtrl: NavController) {
    if (!this.platform.is('mobile')) {
        this.tabsPlacement = 'top';
        this.tabsLayout = 'icon-left';
      }
  }

  logOut(){
    this.authData.logoutUser().then(() =>{
      this.navCtrl.setRoot(MainPage);
      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }
}
