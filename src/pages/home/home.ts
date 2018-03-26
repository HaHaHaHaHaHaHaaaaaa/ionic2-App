import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  relationship: any
  text: string
  constructor(public navCtrl: NavController, public apv: AppProvider) {

  }
  segmentChanged(ev) {

  }

  ngOnInit() {
  /*   setInterval(()=> {
      this.apv.Get("http://www.hao123.com")
    }, 1000); */
  }

}
