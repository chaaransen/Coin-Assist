import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import { FavouritesPage } from '../pages/favourites/favourites';
import { RemindersPage } from '../pages/reminders/reminders';
import { ProfitCalcPage } from '../pages/profit-calc/profit-calc';
import { ApiDataProvider } from '../providers/api-data/api-data';
import { NewsPage } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  tab1Root = HomePage;
  tab2Root = FavouritesPage;
  tab3Root = RemindersPage;
  tab4Root = ProfitCalcPage;
  tab5Root = NewsPage;

  apiUrls: any;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public api: ApiDataProvider) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  ngOnInit() {
    // console.log("GET - api urls from app component");

    this.api.fetchApiUrl().subscribe(res => {
      // console.log("fetched in app component");
      // console.log(res);
      this.api.storeApiUrl(res);
    },
      err => {
        console.log("App component - error fetching data");

      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { apiUrls: this.apiUrls });
  }
}
