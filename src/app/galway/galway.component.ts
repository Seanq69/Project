import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  
import { CommonModule } from '@angular/common'; 
import { WeatherService } from '../services/weather.service';  // Make sure you are importing the service correctly

@Component({
  selector: 'app-galway',
  templateUrl: './galway.component.html',
  styleUrls: ['./galway.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],  // Make sure this is in place
})
export class GalwayComponent implements OnInit {
  mySpace: any[] = [];  // Array to hold multiple weather data objects

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.WeatherService.getGalwayWeather().subscribe(
      (data) => {
        console.log('API Response:', data);  // Log the response to check the structure
        this.mySpace = [{
          text: data.current.condition.text,
          icon: data.current.condition.icon,
          region: data.location.region,
          temp_c: data.current.temp_c,
          wind_mph: data.current.wind_mph,
          humidity: data.current.humidity,
          pressure_mb: data.current.pressure_mb,
          feelslike_c: data.current.feelslike_c,
          gust_mph: data.current.gust_mph,
          uv: data.current.uv
        }];
      },
      (error) => {
        console.error('Error fetching Galway weather data:', error);
      }
    );
  }
}