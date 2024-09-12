// environment.d.ts
export interface Environment {
  production: boolean;
  WeatherApiBaseUrl: string;
  XRapidAPIHostHeaderName: string;
  XRapidAPIHostHeaderValue: string;
  apiKeyHeaderName: string;
  apiKeyHeaderValue: string;
}

export const environment: Environment = {
  production: false,
  WeatherApiBaseUrl: 'https://api.openweathermap.org/data/3.0/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'open-weather-map27.p.rapidapi.com',

  apiKeyHeaderName: 'weather-api-key	',
  apiKeyHeaderValue: '012a0988acd22ef8eb475e9a27f1ade6',
};
