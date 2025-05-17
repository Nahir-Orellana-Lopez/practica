import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-preguntas',
  standalone: true,
  styleUrls: ['./preguntas.component.scss'],
  templateUrl: './preguntas.component.html',
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    CardModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextModule,
    AccordionModule,
    FieldsetModule,
    ChartModule,
  ],
})
export class PreguntasComponent {
  @Input() preguntas: any[] = [];
  respuestas: any = {};

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  getData(pregunta: any) {
    const data = {
      labels: pregunta.opciones.map((o: any) => {
        return o.texto;
      }),
      datasets: [
        {
          label: 'Cantidad',
          data: pregunta.respuestasOpciones.map((ro: any) => {
            return ro.cantidad;
          }),
          // backgroundColor: [
          //   documentStyle.getPropertyValue('--blue-500'),
          //   documentStyle.getPropertyValue('--yellow-500'),
          //   documentStyle.getPropertyValue('--green-500'),
          // ],
          // hoverBackgroundColor: [
          //   documentStyle.getPropertyValue('--blue-400'),
          //   documentStyle.getPropertyValue('--yellow-400'),
          //   documentStyle.getPropertyValue('--green-400'),
          // ],
        },
      ],
    };
    return data;
  }
}
