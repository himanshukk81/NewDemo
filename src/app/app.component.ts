


import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public oneSignal:OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      console.log("dasdasdasda");
      if (platform.is('cordova')) {
        oneSignal.startInit('ee4c154e-c94f-41d6-a980-5824070a3008', '899434259531');
  
        oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
  
        oneSignal.handleNotificationReceived().subscribe((data) => {
          // do something when notification is received
          // console.log("Data==="+JSON.stringify(data));
          alert("data===="+JSON.stringify(data));
        });
  
        oneSignal.handleNotificationOpened().subscribe((data) => {
          // do something when a notification is opened
          // console.log("open data===="+JSON.stringify(data));
        });
  
        oneSignal.endInit();
      }

    });
  }
}
