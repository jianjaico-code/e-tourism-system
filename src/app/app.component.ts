import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from '../pages/main/main';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;

  constructor(platform: Platform, afAuth: AngularFireAuth, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    // let mySelf = this;
    // const authObserver = afAuth.authState.subscribe( user => {
    //   if (user) {
    //     mySelf.rootPage = HomePage;
    //     authObserver.unsubscribe();
    //   } else {
    //     mySelf.rootPage = 'LoginPage';
    //     authObserver.unsubscribe();
    //   }
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}