import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  showMsg(){


    let toast = this.toastCtrl.create({

      message: 'Your Message was send successfully!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

  }

}
