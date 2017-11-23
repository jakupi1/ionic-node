import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl: 'http://127.0.0.1:3001/',
};
@Injectable()
export class AppSettingsProvider {

  constructor(public http: Http) {
    console.log('Hello AppSettingsProvider Provider');
  }
  public getApiUrl() {
    return CONFIG.apiUrl;
  }
}
