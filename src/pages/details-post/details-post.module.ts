import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPostPage } from './details-post';

@NgModule({
  declarations: [
    DetailsPostPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPostPage),
  ],
})
export class DetailsPostPageModule {}
