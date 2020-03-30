import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  isLogin = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cookie: CookieService
  ) {
    this.initializeApp();
  }

  IonViewWillEnter() {
    this.initializeApp();
  }

  ionViewWillLeave() {
    console.log("Will Leave");
  }

  checkLogin = () => {
    const user = this.cookie.check("__uuid__");
    if (user) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  };

  onLogout = () => {
    this.cookie.delete("__uuid__");
    location.assign("/");
  };

  initializeApp() {
    console.log("initialize app");
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkLogin();
    });
  }
}
