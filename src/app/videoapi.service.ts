import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoapiService {

  constructor(private _http: HttpClient) { }

  callVideoAPI(){
    return this._http.get('https://api-uat.greatmanagerinstitute.com/api/v2/test/getTrailerList')
  }
}
