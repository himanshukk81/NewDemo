import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {HomePage} from '../home/home'
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    if(!this.user.mobile)
    {
      alert("Please Enter Mobile Number");
      return;
    }
    
    this.navCtrl.setRoot(TabsPage);
  }

}
