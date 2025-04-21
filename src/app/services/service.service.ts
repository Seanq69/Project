import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getServiceData():Observable<any>{
    return this.http.get("https://api.spacexdata.com/v5/launches/latest")
  }
}
