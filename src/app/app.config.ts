import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

// src/app.config.ts

export const AppConfig = {
  // URL donde corre tu Spring Boot:
  apiUrl: 'http://localhost:8080/api/v1'
};
