import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-details-post',
  templateUrl: 'details-post.html',
})
export class DetailsPostPage {

  post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.post=this.navParams.get('post');

  }


}
