import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';
import { RegistroDeAsistencia } from 'src/registro_de_asistencia/entities/registro_de_asistencia.entity';
import { Evento } from 'src/eventos/entities/evento.entity';
import { Comentario } from 'src/comentarios/entities/comentario.entity';

@Entity()
export class ConfiguracionDeEvento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;

  // Indica si los comentarios están habilitados para este evento
  @Column({ default: false })
  comentariosActivados: boolean;

  // Relación con Eventos (Cada configuración pertenece a un evento)
  @ManyToOne(() => Evento, (evento) => evento.configuracionesEventos, { nullable: false })
  evento: Evento;

  // Relación con RolesDeUsuario
  @ManyToOne(() => RolesDeUsuario, (rolesDeUsuario) => rolesDeUsuario.configuracionesEventos, { nullable: false })
  rolUsuario: RolesDeUsuario;

  // Relación con RegistroDeAsistencia
  @ManyToOne(() => RegistroDeAsistencia, (registroAsistencia) => registroAsistencia.configuracionEvento, { nullable: true })
  registroDeAsistencia?: RegistroDeAsistencia;

  // Relación con Código QR
  @OneToOne(() => CodigoQr, { nullable: true })
  @JoinColumn()
  codigoQR?: CodigoQr;

  // Relación con Comentarios (Solo se activan si comentariosActivados es true)
  @OneToMany(() => Comentario, (comentario) => comentario.configuracionEvento)
  comentarios?: Comentario[];
    geolocalizacion: any;
}