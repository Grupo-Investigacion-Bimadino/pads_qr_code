import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateGeolocalizacionDto {
  // Latitud registrada para el evento, debe ser un número válido
  @IsNotEmpty()
  @IsNumber()
  latitud: number;

  // Longitud registrada para el evento, debe ser un número válido
  @IsNotEmpty()
  @IsNumber()
  longitud: number;

  // ID de la configuración del evento a la que pertenece la geolocalización
  @IsNotEmpty()
  @IsNumber()
  configuracionEventoId: number;

  // ID del código QR asociado a la geolocalización (opcional)
  @IsOptional()
  @IsNumber()
  codigoQrId?: number;
}