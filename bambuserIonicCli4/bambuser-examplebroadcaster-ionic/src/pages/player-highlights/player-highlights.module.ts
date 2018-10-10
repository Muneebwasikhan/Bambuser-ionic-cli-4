import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerHighlightsPage } from './player-highlights';

@NgModule({
  declarations: [
    PlayerHighlightsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerHighlightsPage),
  ],
})
export class PlayerHighlightsPageModule {}
