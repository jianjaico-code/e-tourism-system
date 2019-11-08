import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AuthProvider } from '../providers/auth/auth';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AdminPage } from '../pages/admin/admin';
import { MainPage } from '../pages/main/main';
import { TabsTouristPage } from '../pages/tabs-tourist/tabs-tourist';
import { BusinessmanPage } from '../pages/businessman/businessman';
import { MenuPage } from '../pages/menu/menu';


import { DataTablesModule } from 'angular-datatables';

const firebaseConfig = {
  apiKey: "AIzaSyBDp_zTJo-WgCT9GaqzHqOWQXt9AEP-Ppw",
  authDomain: "onlinetourist.firebaseapp.com",
  databaseURL: "https://onlinetourist.firebaseio.com",
  projectId: "onlinetourist",
  storageBucket: "onlinetourist.appspot.com",
  messagingSenderId: "713223999576"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    BusinessmanPage,
    MainPage,
    MenuPage,
    TabsTouristPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DataTablesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,
    BusinessmanPage,
    MainPage,
    TabsTouristPage,
    MenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
