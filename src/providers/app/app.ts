
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor() {
    
  }

  changeTheme(bool:boolean){
    return !bool;
  }

}
