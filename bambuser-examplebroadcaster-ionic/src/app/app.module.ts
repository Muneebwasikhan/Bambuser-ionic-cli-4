import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { BroadcasterPage } from '../pages/broadcaster/broadcaster';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TranslateModule } from '@ngx-translate/core';
import { TabsPage } from '../pages/tabs/tabs';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LiveChanelsPage } from '../pages/live-chanels/live-chanels';
import { VideoListPage } from '../pages/video-list/video-list';
import { CameraProvider } from '../providers/camera/camera';
import { LoadingProvider } from '../providers/loading/loading';
import { AlertProvider } from '../providers/alert/alert';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BroadcasterPage,
    ContactPage,
    HomePage,
    TabsPage,
    LiveChanelsPage,
    VideoListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BroadcasterPage,
    ContactPage,
    HomePage,
    TabsPage,
    LiveChanelsPage,
    VideoListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FilePath,
    FileTransfer,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // MediaCapture,
    // Media,
    File,
    // Camera,
    // FilePath,
    // FileTransfer,
    // Calendar,
    DatePipe,
    // HeaderColor,
    AlertProvider,
    LoadingProvider,
    CameraProvider,
    // WheelSelector,
  ]
})
export class AppModule {}
