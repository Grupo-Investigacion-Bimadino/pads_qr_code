import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';
import { RegistroDeAsistencia } from 'src/registro_de_asistencia/entities/registro_de_asistencia.entity';

@Entity()
export class Comentario {
  // Identificador único de cada comentario, generado automáticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Contenido del comentario (tipo texto obligatorio)
  @Column({ type: 'text', nullable: false })
  contenido: string;

  // Relación con ConfiguracionDeEvento: cada comentario pertenece a una configuración de evento
  @ManyToOne(() => ConfiguracionDeEvento, (configuracionEvento) => configuracionEvento.comentarios, { nullable: false, onDelete: 'CASCADE' })
  configuracionEvento: ConfiguracionDeEvento;

  // Relación con RolesDeUsuario: cada comentario tiene un autor (usuario con un rol)
  @ManyToOne(() => RolesDeUsuario, (rolesUsuario) => rolesUsuario.comentarios, { nullable: false })
  rolesUsuario: RolesDeUsuario;

  // Relación con RegistroDeAsistencia: opcionalmente, un comentario puede estar vinculado a un registro de asistencia
  @ManyToOne(() => RegistroDeAsistencia, (registroAsistencia) => registroAsistencia.comentarios, { nullable: true, onDelete: 'SET NULL' })
  registroDeAsistencia?: RegistroDeAsistencia;
}