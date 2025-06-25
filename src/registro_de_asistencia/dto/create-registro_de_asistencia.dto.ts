import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateRegistroDeAsistenciaDto {
  // ID del código QR escaneado (obligatorio)
  @IsNotEmpty()
  @IsNumber()
  codigoQrId: number;

  // ID del usuario que registra su asistencia (obligatorio)
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  // ID de la configuración del evento (opcional, si aplica)
  @IsOptional()
  @IsNumber()
  configuracionEventoId?: number;
}