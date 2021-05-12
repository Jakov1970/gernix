import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { ForecastDataComponent } from './components/forecast-data/forecast-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CityForecastComponent,
    ForecastDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
