import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemoLiveStreamPage } from '../demo-live-stream/demo-live-stream';
import { PlayerBasicPage } from '../player-basic/player-basic';
import { PlayerHighlightsPage } from '../player-highlights/player-highlights';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  demoStream(){
    this.navCtrl.push(DemoLiveStreamPage);
  }
  basicPlayer(){
    this.navCtrl.push(PlayerBasicPage);
  }
  highlightPlayer(){
    this.navCtrl.push(PlayerHighlightsPage);
  }

}
