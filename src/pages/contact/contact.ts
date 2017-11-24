import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  photo;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private camera: Camera) {
  }



  showMsg(){


    let toast = this.toastCtrl.create({

      message: 'Your Message was send successfully!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

  }

  TakeImage(){

    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

          this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          
        

          this.photo = 'data:image/jpeg;base64,' + imageData;


          }, (err) => {
          // Handle error
          });  


    console.log('Image taken');

  }

}
