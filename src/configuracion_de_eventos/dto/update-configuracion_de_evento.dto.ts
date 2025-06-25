import { PartialType } from '@nestjs/mapped-types';
import { CreateConfiguracionDeEventoDto } from './create-configuracion_de_evento.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateConfiguracionDeEventoDto extends PartialType(CreateConfiguracionDeEventoDto) {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  rolesUsuarioId?: number;

  @IsOptional()
  @IsNumber()
  codigoQRId?: number;

  @IsOptional()
  @IsNumber()
  registroAsistenciaId?: number;
}