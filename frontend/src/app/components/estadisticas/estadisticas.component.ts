import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../../services/estadisticas.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PreguntasComponent } from '../preguntas/preguntas.component';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  imports: [ButtonModule, RouterModule, PreguntasComponent],
  standalone: true,
})
export class EstadisticasComponent implements OnInit {
  datos: any;
  preguntas: any;

  constructor(private estadisticasService: EstadisticasService) {}

  ngOnInit(): void {
    this.estadisticasService.obtenerEstadisticas().subscribe({
      next: (res) => {
        this.datos = res;
        this.preguntas = res.preguntas;
        this.preguntas.sort(
          (a: { numero: number }, b: { numero: number }) => a.numero - b.numero,
        );
        console.log('Datos recibidos:', this.datos);
      },
      error: (err) => {
        console.error('Error al cargar estadísticas', err);
      },
    });
  }
}
