import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  // Relación Evento - Usuario (Cada evento tiene un usuario organizador)
  @ManyToOne(() => Usuario, (usuario) => usuario.eventosOrganizados)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  // Relación Evento - Roles de Usuario (Cada evento puede estar asociado a un rol)
  @ManyToOne(() => RolesDeUsuario, (rolUsuario) => rolUsuario.eventos)
  @JoinColumn({ name: 'rol_usuario_id' })
  rolUsuario: RolesDeUsuario; //  Cambio de nombre para evitar duplicaciones

  // Relación Usuarios - Eventos (Muchos usuarios pueden participar en muchos eventos)
  @ManyToMany(() => Usuario, (usuario) => usuario.eventosParticipados)
  @JoinTable({ name: 'usuarios_eventos' }) // Tabla intermedia
  usuariosParticipantes: Usuario[];
    configuracionesEventos: any;
}