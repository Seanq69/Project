import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getServiceData():Observable<any>{
    return this.http.get("http://api.weatherapi.com/v1/current.json?key=4eea242677da4642be1120416252304&q=Galway&aqi=yes");
  }
}
