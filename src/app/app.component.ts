import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProfitCalcPage } from '../pages/profit-calc/profit-calc';
import { ApiDataProvider } from '../providers/api-data/api-data';
import { NewsPage } from '../pages/news/news';
import { QuantityCalcPage } from '../pages/quantity-calc/quantity-calc';
import { POINTS } from '../constants/api-constants';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  tab1Root = HomePage;
  tab2Root = QuantityCalcPage;
  tab4Root = ProfitCalcPage;
  tab5Root = NewsPage;

  apiUrls: any;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public api: ApiDataProvider, private fcm: FCM) {
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
      this.api.generateZebpayApis(res).subscribe(generated => {
        // console.log("generated urls passed for store", generated);
        this.api.storeApiUrl(generated);
      });
    },
      err => {
        console.log("App component - error fetching data", err);

      });
    this.api.fetchService(POINTS).then(points => {
      // console.log("Points", points);
      if (points == null) {
        this.api.storeService(POINTS, 4);
      }
    });



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // console.log("Platform ready");
      this.api.prepareVideoAd();
      this.statusBar.styleDefault();
      this.splashScreen.hide()
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log(data);

        } else {
          console.log(data);
        };
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { apiUrls: this.apiUrls });
  }
}
