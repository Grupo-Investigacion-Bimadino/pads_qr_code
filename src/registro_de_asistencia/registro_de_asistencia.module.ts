import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroDeAsistenciaService } from './registro_de_asistencia.service';
import { RegistroDeAsistenciaController } from './registro_de_asistencia.controller';
import { RegistroDeAsistencia } from './entities/registro_de_asistencia.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegistroDeAsistencia, CodigoQr, ConfiguracionDeEvento]),
  ],
  controllers: [RegistroDeAsistenciaController],
  providers: [RegistroDeAsistenciaService],
  exports: [RegistroDeAsistenciaService],
})
export class RegistroDeAsistenciaModule {}