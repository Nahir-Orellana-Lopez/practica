import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../../services/estadisticas.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PreguntasComponent } from '../preguntas/preguntas.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  imports: [ButtonModule, RouterModule, PreguntasComponent],
  standalone: true,
})
export class EstadisticasComponent implements OnInit {
  datos: any;
  preguntas: any;
  nombre: string = 'Encuesta';

  constructor(
    private estadisticasService: EstadisticasService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const codigoResultado = this.route.snapshot.queryParamMap.get('codigo');
    this.estadisticasService
      .obtenerEstadisticas(id, codigoResultado!)
      .subscribe({
        next: (res) => {
          this.datos = res;
          this.nombre = res.nombre;
          this.preguntas = res.preguntas;
          this.preguntas.sort(
            (a: { numero: number }, b: { numero: number }) =>
              a.numero - b.numero,
          );
          console.log('Datos recibidos:', this.datos);
        },
        error: (err) => {
          console.error('Error al cargar estadísticas', err);
        },
      });
  }
}
