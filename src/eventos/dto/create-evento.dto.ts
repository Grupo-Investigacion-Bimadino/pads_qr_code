import { IsString, IsDate, IsInt } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsDate()
  fechaInicio: Date;

  @IsDate()
  fechaFin: Date;

  @IsInt()
  geolocalizacionId: number;

  @IsInt()
  configuracionEventoId: number;
}