import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeolocalizacionService } from './geolocalización.service';
import { GeolocalizacionController } from './geolocalización.controller';
import { Geolocalizacion } from './entities/geolocalización.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';

@Module({
  imports: [
    // Registro de entidades en TypeORM
    TypeOrmModule.forFeature([Geolocalizacion, ConfiguracionDeEvento, CodigoQr]),
  ],
  controllers: [GeolocalizacionController], // Registro del controlador
  providers: [GeolocalizacionService], // Registro del servicio
  exports: [GeolocalizacionService], // Exportar el servicio para otros módulos
})
export class GeolocalizacionModule {}


