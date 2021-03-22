import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { };

  getDog(): Observable<any>{
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
