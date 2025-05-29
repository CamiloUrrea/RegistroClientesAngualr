// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

export interface Credentials {
  username: string;
  contrasena: string;
}

export interface AuthResponse {
  token: string;  // o lo que te retorne tu API
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = `${AppConfig.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(creds: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.base}/login`, creds);
  }
}
