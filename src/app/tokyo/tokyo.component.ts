import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  
import { CommonModule } from '@angular/common'; 
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class TokyoComponent  implements OnInit {
  mySpace: any[] = [];

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.WeatherService.getTokyoWeather().subscribe(
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
        console.error('Error fetching Tokyo weather data:', error);
      }
    );
  }
}


