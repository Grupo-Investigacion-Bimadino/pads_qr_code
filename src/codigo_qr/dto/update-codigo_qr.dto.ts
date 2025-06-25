import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCodigoQrDto {
  // Código QR único, opcional si se requiere actualizar
  @IsOptional()
  @IsString()
  codigo?: string;

  // ID del rol de usuario vinculado al código QR, opcional si se desea modificar
  @IsOptional()
  @IsNumber()
  rolesUsuarioId?: number;

  // ID de la configuración del evento al que pertenece el código QR, opcional si se quiere reasignar
  @IsOptional()
  @IsNumber()
  configuracionEventoId?: number;
}