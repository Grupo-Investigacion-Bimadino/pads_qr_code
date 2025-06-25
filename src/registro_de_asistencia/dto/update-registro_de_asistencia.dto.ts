import { IsNumber, IsOptional } from 'class-validator';

export class UpdateRegistroDeAsistenciaDto {
  // ID del código QR escaneado (opcional, por si se necesita cambiar)
  @IsOptional()
  @IsNumber()
  codigoQrId?: number;

  // ID del usuario asociado al registro de asistencia (opcional, en caso de modificaciones)
  @IsOptional()
  @IsNumber()
  usuarioId?: number;

  // ID de la configuración del evento (opcional, si se requiere reasignar)
  @IsOptional()
  @IsNumber()
  configuracionEventoId?: number;
}