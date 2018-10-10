import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerBasicPage } from './player-basic';

@NgModule({
  declarations: [
    PlayerBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerBasicPage),
  ],
})
export class PlayerBasicPageModule {}
