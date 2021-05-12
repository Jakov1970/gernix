import { Component, OnInit } from '@angular/core';

import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  list: Weather[] = [];

  gradovi = ['berlin', 'london', 'moscow', 'madrid', 'paris'];

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    for(let i = 0; i < this.gradovi.length; i++){
      this.getData(this.gradovi[i].toString());
    }
  }

  getData(i: string) {
     this.weatherService.getCurrentWeather(i)
    .subscribe( data => {
      this.list.push(data);
    });
  }

  onCardClick(event){
    let cityName = event.name;
    this.weatherService.emitData(cityName);
  }

}
