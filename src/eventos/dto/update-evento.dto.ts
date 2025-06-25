import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsInt, ValidateIf, IsOptional } from 'class-validator';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
  @ValidateIf(obj => obj.geolocalizacionId !== undefined)
  @IsOptional()
  @IsInt()
  geolocalizacionId?: number;

  @ValidateIf(obj => obj.configuracionEventoId !== undefined)
  @IsOptional()
  @IsInt()
  configuracionEventoId?: number;
}