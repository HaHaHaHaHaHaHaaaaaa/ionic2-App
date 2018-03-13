import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'; */
import { AppProvider } from '../providers/app/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  nightState:boolean=false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public apv:AppProvider) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首页', component: 'HomePage' },
      { title: '列表', component: 'ListPage' }
    ];

  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.apv.changeTheme(false)
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
