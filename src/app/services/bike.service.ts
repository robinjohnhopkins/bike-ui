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
  
  getBikes() {
    console.log('BikeService.getBikes called');
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }
 
  getBike(id: number) {
    console.log('BikeService.getBike called');
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes/' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }
  createBikeRegistration(bike){
    console.log('BikeService.createBikeRegistration called');
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }

}
