import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoinDetailPage } from '../pages/coin-detail/coin-detail';
import { BuySellPage } from '../pages/buy-sell/buy-sell';
import { FavouritesPage } from '../pages/favourites/favourites';
import { RemindersPage } from '../pages/reminders/reminders';
import { ProfitCalcPage } from '../pages/profit-calc/profit-calc';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiDataProvider } from '../providers/api-data/api-data';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
import { QuantityCalcPage } from '../pages/quantity-calc/quantity-calc';
import { NewsPage } from '../pages/news/news';
import { Utilities } from '../providers/utilities/utilities';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMobFree, AdMobFreeRewardVideo } from '@ionic-native/admob-free';
import { FCM } from '@ionic-native/fcm';
import { Network } from '@ionic-native/network';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,

    // pages
    HomePage,
    CoinDetailPage,
    BuySellPage,
    FavouritesPage,
    RemindersPage,
    ProfitCalcPage,
    QuantityCalcPage,
    NewsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    // pages
    HomePage,
    CoinDetailPage,
    BuySellPage,
    FavouritesPage,
    RemindersPage,
    ProfitCalcPage,
    QuantityCalcPage,
    NewsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiDataProvider,
    Utilities,
    FirebaseAnalytics,
    GoogleAnalytics,
    AdMobFree,
    AdMobFreeRewardVideo,
    FCM,
    Network, 
    NativePageTransitions
  ]
})
export class AppModule { }
