import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, Http } from '../../node_modules/@angular/http';
// import { HttpClientModule } from '../../node_modules/@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BroadcasterPage } from '../pages/broadcaster/broadcaster';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DemoLiveStreamPage } from '../pages/demo-live-stream/demo-live-stream';
import { PlayerBasicPage } from '../pages/player-basic/player-basic';
import { PlayerHighlightsPage } from '../pages/player-highlights/player-highlights';
// import { InterceptorProvider } from '../providers/interceptor/interceptor';


import { InterceptorProvider } from '../providers/interceptor/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BroadcasterPage,
    TabsPage,
    DemoLiveStreamPage,
    PlayerBasicPage,
    PlayerHighlightsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    BroadcasterPage,
    TabsPage,
    DemoLiveStreamPage,
    PlayerBasicPage,
    PlayerHighlightsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InterceptorProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
  ]
})
export class AppModule {}
