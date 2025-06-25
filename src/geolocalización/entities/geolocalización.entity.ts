import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';

@Entity()
export class Geolocalizacion {
  // Identificador único de la geolocalización, generado automáticamente
  @PrimaryGeneratedColumn()
  id: number;

  // Latitud registrada para el evento
  @Column({ type: 'decimal', precision: 10, scale: 7 })
  latitud: number;

  // Longitud registrada para el evento
  @Column({ type: 'decimal', precision: 10, scale: 7 })
  longitud: number;

  // Fecha y hora en que se registró la geolocalización
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaHora: Date;

  // Relación con ConfiguracionDeEvento: Cada evento tiene una ubicación específica
  @ManyToOne(() => ConfiguracionDeEvento, (evento) => evento.geolocalizacion, { nullable: false, onDelete: 'CASCADE' })
  configuracionEvento: ConfiguracionDeEvento;

  // Relación con Código QR: Un código QR puede estar vinculado a una ubicación para validación de asistencia
  @ManyToOne(() => CodigoQr, (codigoQr) => codigoQr.geolocalizacion, { nullable: true, onDelete: 'SET NULL' })
  codigoQr: CodigoQr;
}