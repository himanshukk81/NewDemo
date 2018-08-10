import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: App) {

  }

  logout()
  {
    this.navCtrl.getRootNav().setRoot(LoginPage);
  }

}
