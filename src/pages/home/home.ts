import { GalleryPage } from './../gallery/gallery';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
      title: "Welcome to MyGallery!",
      description: "MyGallery is an application build with ionic framwork! MyGallery use pixabay api.",
      image: "assets/imgs/1x.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/logo.png",
    }
  ];


  nextPage(){
    this.navCtrl.push(GalleryPage);
  }

}


