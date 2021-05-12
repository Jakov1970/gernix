import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-forecast-data',
  templateUrl: './forecast-data.component.html',
  styleUrls: ['./forecast-data.component.css']
})
export class ForecastDataComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  dataWeather = [];
  nesto = 'ekeke';

  ngOnInit(): void {
    this.weatherService.subscriber$.subscribe((name:string) => { this.getForecast(name) });
    this.getForecast('Berlin');
  }

  getForecast(name: string){
    this.dataWeather = [];
    this.weatherService.getNextWeather(name).subscribe( data => {
      this.showResults(data);
    })
  }

  showResults(data) {
    for(let i = 0; i<data.list.length; i++){      
      this.dataWeather.push({
        time: data.list[i].dt_txt,
        tempMax: (data.list[i].main.temp_max - 273).toFixed(2),
        tempMin: (data.list[i].main.temp_min - 273).toFixed(2),
        wind: data.list[i].wind.speed
      })
    
    }

  }


}
