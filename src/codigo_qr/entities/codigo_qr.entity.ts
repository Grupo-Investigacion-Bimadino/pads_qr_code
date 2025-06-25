import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { RegistroDeAsistencia } from 'src/registro_de_asistencia/entities/registro_de_asistencia.entity';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';

@Entity()
export class CodigoQr {
  // Identificador único del código QR, generado automáticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Código QR único utilizado para el registro de asistencia
  @Column({ unique: true })
  codigo: string;

  // Relación con RegistroDeAsistencia: Un código QR puede estar vinculado a múltiples registros de asistencia
  @OneToMany(() => RegistroDeAsistencia, (registroAsistencia) => registroAsistencia.codigoQr)
  registrosDeAsistencia: RegistroDeAsistencia[];

  // Relación con RolesDeUsuario: Cada código QR está vinculado a un rol de usuario que define permisos en el evento
  @ManyToOne(() => RolesDeUsuario, (rolesUsuario) => rolesUsuario.codigosQr, { nullable: false })
  rolUsuario: RolesDeUsuario;

  // Relación con ConfiguracionDeEvento: Cada código QR pertenece a una configuración de evento específica
  @ManyToOne(() => ConfiguracionDeEvento, (configuracionEvento) => configuracionEvento.codigoQR, { nullable: false, onDelete: 'CASCADE' })
  configuracionEvento: ConfiguracionDeEvento;
    geolocalizacion: any;
}