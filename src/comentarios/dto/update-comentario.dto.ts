import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateComentarioDto {
  // Contenido del comentario (opcional, si se permite en la configuración del evento)
  @IsOptional()
  @IsString()
  contenido?: string;

  // ID del usuario (rol) que realiza la actualización (opcional)
  @IsOptional()
  @IsNumber()
  rolesUsuarioId?: number;

  // ID del registro de asistencia (mantener la relación, opcional)
  @IsOptional()
  @IsNumber()
  registroDeAsistenciaId?: number;
}