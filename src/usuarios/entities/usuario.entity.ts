import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from 'src/eventos/entities/evento.entity';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity'; 

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  correo: string;

  // Relación Usuario - RolesDeUsuario (Cada usuario tiene un rol asignado)
  @ManyToOne(() => RolesDeUsuario, (rolUsuario) => rolUsuario.usuarios)
  @JoinColumn({ name: 'rol_usuario_id' })
  rolUsuario: RolesDeUsuario;

  // Relación Usuario - Eventos organizados (Un usuario puede organizar varios eventos)
  @OneToMany(() => Evento, (evento) => evento.usuario)
  eventosOrganizados: Evento[];

  // Relación Usuarios - Eventos participados (Muchos usuarios pueden participar en varios eventos)
  @ManyToMany(() => Evento, (evento) => evento.usuariosParticipantes)
  eventosParticipados: Evento[];
    RolesDeUsuario: any;
  registrosDeAsistencia: any;
}