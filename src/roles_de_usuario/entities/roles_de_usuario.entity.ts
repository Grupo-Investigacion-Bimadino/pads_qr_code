import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Evento } from 'src/eventos/entities/evento.entity';
import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';

@Entity()
export class RolesDeUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  // Relación RolesDeUsuario - Usuarios (Un rol puede ser asignado a varios usuarios)
  @OneToMany(() => Usuario, (usuario) => usuario.rolUsuario)
  usuarios: Usuario[];

  // Relación RolesDeUsuario - Eventos (Un rol puede estar asociado a varios eventos)
  @OneToMany(() => Evento, (evento) => evento.rolUsuario)
  eventos: Evento[];

  // Relación RolesDeUsuario - Configuración de Eventos (Corrección en la referencia bidireccional)
  @OneToMany(() => ConfiguracionDeEvento, (configuracionEvento) => configuracionEvento.rolUsuario)
  configuracionesEventos: ConfiguracionDeEvento[];

  // Relación RolesDeUsuario - Comentarios (Cada comentario tiene un usuario asignado)
  @OneToMany(() => Comentario, (comentario) => comentario.rolesUsuario)
  comentarios: Comentario[];
  codigosQr: any;
}