import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { VideoListPage } from '../video-list/video-list';
import { TabsPage } from '../tabs/tabs';




@IonicPage()
@Component({
  selector: 'page-live-chanels',
  templateUrl: 'live-chanels.html',
})
export class LiveChanelsPage {
  searchEnable = false;
  obj=[
    {
      imgSrc:"https://cdn57.androidauthority.net/wp-content/uploads/2017/04/Samsung-Galaxy-S7-vs-S7-Edge-532-1340x754.jpg",
      disc: "Samsung S7 edge..",
      name: "Muneeb Wasi Khan"
    },
    {
      imgSrc:"https://wallpapercave.com/wp/asmu9o0.jpg",
      disc: "Shoe Channel",
      name: "Salman Khan"
    },
    {
      imgSrc:"http://wallpaperstop.net/wp-content/uploads/2018/02/Black%20Clothes%20Wallpaper%20good.jpg",
      disc: "The Clothes Mart",
      name: "Areeb Khan"
    },
    {
      imgSrc:"https://d2giyh01gjb6fi.cloudfront.net/default/0001/55/thumb_54223_default_big.jpeg",
      disc: "Samsung Smartphones Over World...",
      name: " Areeb Khan"
    },
    {
      imgSrc:"https://images7.alphacoders.com/320/320434.jpg",
      disc: "Vaio Laptop biggest Mart..",
      name: "Aqib Khan"
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveChanelsPage');

  }

  enableSearch(){
this.searchEnable = !this.searchEnable;
  }
  eventList(){
    this.navCtrl.push(VideoListPage);
  }
  testingButton(){
    this.appCtrl.getRootNav().setRoot(TabsPage);
    // this.appCtrl.getRootNav().setRoot(TabsPage);

  }

}