import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BikeService {

  constructor(private http:HttpClient) {
    console.log('BikeService ctor');
   }
  
  getBikes(){
    console.log('BikeService.getBikes called');
    return this.http.get('/server/api/v1/bikes');
  }

}
