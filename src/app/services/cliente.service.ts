import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

export interface Cliente {
  nombre: string;
  username: string;
  contrasena: string;
  prefijoTelefono: string;
  telefono: string;
}

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private base = `${AppConfig.apiUrl}/clientes`;

  constructor(private http: HttpClient) {}

  registrar(cliente: Cliente): Observable<void> {
    return this.http.post<void>(this.base, cliente);
  }
}

