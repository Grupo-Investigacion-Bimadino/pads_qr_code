import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCodigoQrDto {
  // Código QR único, debe ser una cadena de texto válida
  @IsNotEmpty()
  @IsString()
  codigo: string;

  // ID del rol de usuario vinculado al código QR
  @IsNotEmpty()
  @IsNumber()
  rolesUsuarioId: number;

  // ID de la configuración del evento al que pertenece el código QR
  @IsNotEmpty()
  @IsNumber()
  configuracionEventoId: number;
}