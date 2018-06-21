import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProfitCalcPage } from '../pages/profit-calc/profit-calc';
import { ApiDataProvider } from '../providers/api-data/api-data';
import { NewsPage } from '../pages/news/news';
import { QuantityCalcPage } from '../pages/quantity-calc/quantity-calc';
import * as Constants from '../constants/api-constants';
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
  usesUntilPrompt: number;
  rateFlag: boolean;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public api: ApiDataProvider, private fcm: FCM, private app: App, private alertCtrl: AlertController) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  ngOnInit() {
    // console.log("Ng oninit Called - app component");
    this.platform.ready().then(() => {
      this.api.fetchService(Constants.POINTS).then(points => {
        // console.log("Points App component", points);
        if (points == null) {
          // console.log("Points is undefined ", points);
          this.api.storeService(Constants.POINTS, Constants.DEFAULT_POINT);
        }
      });

      this.api.fetchService(Constants.RATED).then(rateFlag => {
        // console.log("Rate Flag ", rateFlag);
        if (rateFlag == null) {
          this.rateFlag = false;
          this.api.storeService(Constants.RATED, this.rateFlag);
        } else {
          this.rateFlag = rateFlag;
        }

      });

      this.api.fetchService(Constants.RATE_USES_UNTIL).then(rateUsesLeft => {
        // console.log("USES UNTIL LEFT", rateUsesLeft);
        if (rateUsesLeft == null) {
          let defaultLeft = Constants.DEFAULT_USES_UNTIL;
          this.usesUntilPrompt = defaultLeft;
          this.api.storeService(Constants.RATE_USES_UNTIL, this.usesUntilPrompt);
          // console.log("UsesUntilLeft Null so default ", this.usesUntilPrompt);

        } else {
          this.usesUntilPrompt = rateUsesLeft;
          // console.log("Fetched Uses Until left ", this.usesUntilPrompt);

        }
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // console.log("Platform ready");

      this.api.prepareVideoAd();
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleBlackOpaque();
      this.statusBar.show();
      this.splashScreen.hide()
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log(data);

        } else {
          console.log(data);
        };
      });

      this.platform.registerBackButtonAction(() => {
        // console.log("Backbutton pressed ", this.rateFlag);

        if (!this.rateFlag) {
          // console.log("Not yet Rated checking rating dialog display");

          let listNav = this.app.getActiveNavs();
          // console.log("Active navs", activeNav);
          // console.log("can go back", activeNav[0].canGoBack());
          let activeNav = listNav[0];
          if (!activeNav.canGoBack()) {
            if (this.usesUntilPrompt > 0) {
              // console.log("Uses Until prompt ", this.usesUntilPrompt);
              this.usesUntilPrompt -= 1;
              this.api.storeService(Constants.RATE_USES_UNTIL, this.usesUntilPrompt);
              this.platform.exitApp();
            } else if (this.usesUntilPrompt == 0) {
              // console.log("Showing rate dialog,Uses until prompt ", this.usesUntilPrompt);
              this.likeAppDialog();
            }
          }
          else {
            activeNav.pop();
          }
        } else {
          // console.log("Already Rated Exiting", this.rateFlag);

          this.platform.exitApp();
        }
      });
    });
  }

  likeAppDialog() {
    let alert = this.alertCtrl.create({
      title: Constants.LIKE_DIALOG_HEAD,
      message: Constants.LIKE_DIALOG_DESC,
      buttons: [
        {
          text: 'No',
          handler: () => {
            // console.log('No dont like the App');
            this.usesUntilPrompt = Constants.DONT_LIKE;
            this.api.storeService(Constants.RATE_USES_UNTIL, Constants.DONT_LIKE);
            this.platform.exitApp();
          }
        },
        {
          text: 'Yes',
          handler: () => {
            // console.log("Yes Like the App");
            this.rateDialog();
          }
        }
      ]
    });
    alert.present();
  }

  rateDialog() {
    let alert = this.alertCtrl.create({
      title: Constants.RATE_DIALOG_HEAD,
      message: Constants.RATE_DIALOG_DESC,
      buttons: [
        {
          text: 'Later',
          handler: () => {
            // console.log('Remind Later clicked');
            this.usesUntilPrompt = Constants.LATER_LIKE;
            this.api.storeService(Constants.RATE_USES_UNTIL, Constants.LATER_LIKE);
            this.platform.exitApp();
          }
        },
        {
          text: 'Rate!',
          handler: () => {
            // console.log('Rating and getting 5 points');
            this.api.rewardNotif = true;
            window.open(Constants.RATE_LINK, '_system', 'location=yes');
            this.usesUntilPrompt = Constants.RATE_REWARD;
            this.api.fetchService(Constants.POINTS).then(points => {
              // console.log("Points", points);
              this.api.storeService(Constants.POINTS, points + Constants.RATE_REWARD);
            });
            this.rateFlag = true;
            this.api.storeService(Constants.RATED, this.rateFlag);
            // console.log("Rated Flag set", this.rateFlag);

          }
        }
      ]
    });
    alert.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { apiUrls: this.apiUrls });
  }
}
