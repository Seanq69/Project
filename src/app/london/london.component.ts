import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // For Ionic components
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],  
})
export class LondonComponent implements OnInit {
  mySpace: any[] = []; // Holds the weather data for London

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.WeatherService.getLondonWeather().subscribe(
      (data) => {
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
        console.error('Error fetching London weather data:', error);
      }
    );
  }
}
