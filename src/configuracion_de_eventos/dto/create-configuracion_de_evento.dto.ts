import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateConfiguracionDeEventoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

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