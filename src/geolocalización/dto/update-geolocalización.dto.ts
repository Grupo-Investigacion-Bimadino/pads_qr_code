import { IsOptional, IsNumber } from 'class-validator';

export class UpdateGeolocalizacionDto {
  // Latitud de la geolocalización, opcional si se requiere actualizar
  @IsOptional()
  @IsNumber()
  latitud?: number;

  // Longitud de la geolocalización, opcional si se requiere actualizar
  @IsOptional()
  @IsNumber()
  longitud?: number;

  // ID de la configuración del evento asociada a la geolocalización, opcional si se quiere modificar
  @IsOptional()
  @IsNumber()
  configuracionEventoId?: number;

  // ID del código QR vinculado a la geolocalización, opcional si se desea actualizar
  @IsOptional()
  @IsNumber()
  codigoQrId?: number;
}