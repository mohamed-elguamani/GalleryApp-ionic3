import { DetailsPostPage } from './../pages/details-post/details-post';
import { galleryService } from './../services/gellery.service';
import { GalleryPage } from './../pages/gallery/gallery';
import { ContactPage } from './../pages/contact/contact';
import { AboutPage } from './../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule }    from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    GalleryPage,
    DetailsPostPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage, 
    ContactPage,
    GalleryPage,
    DetailsPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    galleryService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
