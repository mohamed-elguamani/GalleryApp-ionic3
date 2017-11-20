import { GalleryPage } from './../pages/gallery/gallery';
import { ContactPage } from './../pages/contact/contact';
import { AboutPage } from './../pages/about/about';
import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  menusItems =[
    {title :'Home', page : HomePage},
    {title :'About', page : AboutPage},
    {title :'Gallery', page : GalleryPage},
    {title :'Contact', page : ContactPage},
   

  ];



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();

      statusBar.backgroundColorByHexString('#008975');
      splashScreen.hide();
    });
  }

    onPage(item){

        this.rootPage=item.page;

  }
}

