import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class ObtenerEstadisticaEncuestaDTO {
  @ApiProperty()
  @IsUUID('4')
  @IsNotEmpty()
  codigo: string;
}
