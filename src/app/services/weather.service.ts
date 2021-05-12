import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Weather } from '../models/weather';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  observer = new Subject();
  subscriber$ = this.observer.asObservable();

  emitData(data) {
    this.observer.next(data);
  }

  getCurrentWeather(city: string): Observable<Weather> {
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f21ea60d19c22715b81453e5aa37a6a`).pipe(map(x => {
      return {
        time: x.dt,
        name: x.name,
        temp: x.main.temp,
        wind: x.wind.speed,
        tempMax: x.main.temp_max,
        tempMin: x.main.temp_min
      };
    }));
  }

  getNextWeather(city: string) {
    return this.http.
      get<Weather>(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8f21ea60d19c22715b81453e5aa37a6a`)
  }

}
