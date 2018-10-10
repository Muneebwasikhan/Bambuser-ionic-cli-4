import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-demo-live-stream',
  templateUrl: 'demo-live-stream.html',
})
export class DemoLiveStreamPage {
url= "https://api.bambuser.com/broadcasts";
arg="94599df6-cc5a-63c4-b6c3-3151d6ede722";
constructor(
  public navCtrl: NavController,
   public navParams: NavParams,
  private element: ElementRef,
  private zone: NgZone,
   private http: HttpClient,
   public appCtrl: App, ) {
    this.load();
}

load()
  {
    // this.loading.present();
    this.http.get(this.url+this.arg,{
    headers: { 'Content-Type': 'application/json',Authorization: 'Bearer KEY',Accept: 'application/vnd.bambuser.v1+json' }})
    .subscribe(res => {
    console.log(res); 
    // this.loading.dismiss();
    }, 
    (err: HttpErrorResponse) => { 
    if(err.status == 500){
    alert("Internal Server Error.Try Again");
    // this.loading.dismiss();
    }
    });
//     this.http.get(this.url).map(res => res.json()).subscribe(data => {
//     console.log(data);
     
// });
  }

}
