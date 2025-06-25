import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Comentario } from 'src/comentarios/entities/comentario.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity()
export class RegistroDeAsistencia {
  // Identificador único del registro de asistencia, generado automáticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Fecha y hora en que se registró la asistencia (por defecto, el timestamp actual)
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;

  // Relación con ConfiguracionDeEvento: cada registro de asistencia pertenece a un evento específico
  @ManyToOne(() => ConfiguracionDeEvento, (configuracionEvento) => configuracionEvento.registroDeAsistencia, { nullable: true, onDelete: 'SET NULL' })
  configuracionEvento: ConfiguracionDeEvento;

  // Relación con Comentarios: un registro de asistencia puede tener múltiples comentarios asociados
  @OneToMany(() => Comentario, (comentario) => comentario.registroDeAsistencia)
  comentarios: Comentario[];

  // Relación con Código QR: cada registro de asistencia debe estar vinculado a un código QR escaneado
  @ManyToOne(() => CodigoQr, (codigoQr) => codigoQr.registrosDeAsistencia, { nullable: false, onDelete: 'CASCADE' })
  codigoQr: CodigoQr;

  // Relación con Usuario: cada registro de asistencia pertenece a un usuario que ha escaneado el código QR
  @ManyToOne(() => Usuario, (usuario) => usuario.registrosDeAsistencia, { nullable: false, onDelete: 'CASCADE' })
  usuario: Usuario;
}