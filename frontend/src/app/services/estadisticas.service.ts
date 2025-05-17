import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasService {
  private apiUrl =
    'http://localhost:3000/api/v1/encuestas/estadisticas/1?codigo=4e707a39-6116-4815-93f1-11013e3d5600';

  constructor(private http: HttpClient) {}

  obtenerEstadisticas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
