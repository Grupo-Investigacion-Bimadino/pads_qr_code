import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesDeUsuarioDto } from './create-roles_de_usuario.dto';
import { IsArray, IsNumber, IsOptional } from 'class-validator';

export class UpdateRolesDeUsuarioDto extends PartialType(CreateRolesDeUsuarioDto) {
  // Relación con Usuarios - Lista de IDs de usuarios asignados
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  usuariosIds?: number[];

  // Relación con Eventos - Lista de IDs de eventos asociados
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  eventosIds?: number[];

  // Relación con Configuración de Eventos - Lista de IDs de configuraciones asignadas
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  configuracionesEventosIds?: number[];

  // Relación con Comentarios - Lista de IDs de comentarios vinculados
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  comentariosIds?: number[];
}
