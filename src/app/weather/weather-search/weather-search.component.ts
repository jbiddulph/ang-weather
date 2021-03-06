import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  query = '';
  weather: any;
  errorMessage = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.weather);
  }

  search() {
    this.weatherService
        .searchWeatherData(this.query)
        .subscribe(
          weather => this.weather = weather,
          error => this.errorMessage = <any>error,
          () => this.query = ''
        );
  }

}
