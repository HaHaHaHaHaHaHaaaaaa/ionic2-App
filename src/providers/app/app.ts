import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AppProvider Provider');
  }

  ngOnInit() {

  }
  Get(url: string) {/* "http://www.hao123.com" */

    this.http.get(url).toPromise().then(rs => {
      console.log(rs)
    }).catch(err => {
      console.log(err)
    })

  }



  changeTheme(bool: boolean) {
    return !bool;
  }

}
