import { IsString, IsOptional, IsArray, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateRolesDeUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  // Relación con Usuarios - Lista de IDs de usuarios asignados al rol
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  usuariosIds?: number[];

  // Relación con Eventos - Lista de IDs de eventos asociados al rol
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  eventosIds?: number[];

  // Relación con Configuración de Eventos - Lista de IDs de configuraciones asociadas
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  configuracionesEventosIds?: number[];

  // Relación con Comentarios - Lista de IDs de comentarios vinculados al rol
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  comentariosIds?: number[];
}