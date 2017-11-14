import { DetailsPostPage } from './../details-post/details-post';
import { galleryService } from './../../services/gellery.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  posts:any={hits:[]};
  size=10;
  currentpage=1;
  totalPages:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service : galleryService, private loadingCtr : LoadingController) {

      let loading=this.loadingCtr.create({
        spinner: 'dots',
        content: 'Please wait...'
      });

      loading.present();
      this.getData();
      loading.dismiss();

     
    

  }

  // get all post

  getData(){

    this.service.getAll(this.size,this.currentpage).subscribe(

    data =>{

          this.totalPages=data.totalHits / this.size;

          if(this.totalPages % this.size !=0) ++this.totalPages;

          data.hits.forEach(el => {

            this.posts.hits.push(el);
            
          });

      }

    );
  }


// search bar

  search(event){

    let key=event.target.value;


    this.service.getByKeyword(key,this.size,this.currentpage).subscribe(data => this.posts=data);

  }


  //infinitescroll

  doInfinite($event){


    setTimeout(() => {

    if(this.currentpage<this.totalPages){

      ++this.currentpage;
      this.getData();
      
    }
      $event.complete();

    }, 500);


  }

 // display post details

  onDetailsPost(post){
    this.navCtrl.push(DetailsPostPage,{'post':post});
  }

}
