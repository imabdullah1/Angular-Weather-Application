import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

// environment.d.ts
export interface Environment {
  production: boolean;
  WeatherApiBaseUrl: string;
  XRapidAPIHostHeaderName: string;
  XRapidAPIHostHeaderValue: string;
  apiKeyHeaderName: string;
  apiKeyHeaderValue: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.WeatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(environment.apiKeyHeaderName, environment.apiKeyHeaderValue),
      params: new HttpParams()
        .set('q', 'cityName')
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
