import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasService {
  private apiUrl = 'http://localhost:3000/api/v1/encuestas/estadisticas/';
  //  'http://localhost:3000/api/v1/encuestas/estadisticas/2?codigo=e6365f4a-4216-4994-8397-27da2384fa33';
  constructor(private http: HttpClient) {}

  obtenerEstadisticas(id: number, codigoResultado: string): Observable<any> {
    console.log(id, codigoResultado);
    return this.http.get(this.apiUrl + id + '?codigo=' + codigoResultado);
  }
}
