import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { EncuestasService } from '../services/encuestas.service';
import { CreateEncuestaDTO } from '../dtos/create-encuesta.dto';
import { ObtenerEstadisticaEncuestaDTO } from '../dtos/obtener-estadisticas-encuesta.dto';
import { ObtenerEncuestaDTO } from '../dtos/obtener-encuesta.dto';
import { Encuesta } from '../entities/encuesta.entity';
import { EstadisticasDto } from '../dtos/estadisticas.dto';

@Controller('/encuestas')
export class EncuestasController {
  constructor(private encuestasService: EncuestasService) {}

  @Post()
  async crearEncuesta(@Body() dto: CreateEncuestaDTO): Promise<{
    id: number;
    codigoRespuesta: string;
    codigoResultados: string;
  }> {
    return await this.encuestasService.crearEncuesta(dto);
  }

  @Get(':id')
  async obtenerEncuesta(
    @Param('id') id: number,
    @Query() dto: ObtenerEncuestaDTO,
  ): Promise<Encuesta> {
    return await this.encuestasService.obtenerEncuesta(
      id,
      dto.codigo,
      dto.tipo,
    );
  }

  @Get('/estadisticas/:id')
  async obtenerEstadisticaEncuesta(
    @Param('id') id: number,
    @Query() dto: ObtenerEstadisticaEncuestaDTO,
  ): Promise<EstadisticasDto> {
    return await this.encuestasService.obtenerEstadisticaEncuesta(
      id,
      dto.codigo,
    );
  }
}
