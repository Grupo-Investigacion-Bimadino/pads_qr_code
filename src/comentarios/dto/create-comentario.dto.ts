import { FindOperator } from "typeorm";
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateComentarioDto {
  // ID de la configuración de evento
  @IsNotEmpty()
  @IsNumber()
  configuracionEventoId: number | FindOperator<number>;

  // Contenido del comentario (opcional, depende de configuración del evento)
  @IsOptional()
  @IsString()
  contenido?: string;

  // ID del usuario (rol) que crea el comentario
  @IsNotEmpty()
  @IsNumber()
  rolesUsuarioId: number;

  // ID del registro de asistencia (obligatorio)
  @IsNotEmpty()
  @IsNumber()
  registroDeAsistenciaId: number;
}
