import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoLiveStreamPage } from './demo-live-stream';

@NgModule({
  declarations: [
    DemoLiveStreamPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoLiveStreamPage),
  ],
})
export class DemoLiveStreamPageModule {}
