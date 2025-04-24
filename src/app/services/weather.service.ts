import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '4eea242677da4642be1120416252304';
  
  constructor(private http: HttpClient) {}

  // Method for Galway Weather
  getGalwayWeather(): Observable<any> {
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=4eea242677da4642be1120416252304&q=Galway&aqi=yes`);
  }

  // Method for London Weather
  getLondonWeather(): Observable<any> {
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=4eea242677da4642be1120416252304&q=London&aqi=yes`);
  }

  // Method for Tokyo Weather
  getTokyoWeather(): Observable<any> {
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=4eea242677da4642be1120416252304&q=Tokyo&aqi=yes`);
  }

  // Method for New York Weather
  getNewYorkWeather(): Observable<any> {
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=4eea242677da4642be1120416252304&q=New_York&aqi=yes
`);
  }
}
