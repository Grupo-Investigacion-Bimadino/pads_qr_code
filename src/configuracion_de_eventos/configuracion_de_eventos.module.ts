import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfiguracionDeEventosService } from './configuracion_de_eventos.service';
import { ConfiguracionDeEventoController } from './configuracion_de_eventos.controller';
import { ConfiguracionDeEvento } from './entities/configuracion_de_evento.entity';
import { RolesDeUsuario } from '../roles_de_usuario/entities/roles_de_usuario.entity';
import { CodigoQr } from '../codigo_qr/entities/codigo_qr.entity';
import { RegistroDeAsistencia } from '../registro_de_asistencia/entities/registro_de_asistencia.entity';
import { Comentario } from '../comentarios/entities/comentario.entity'; // Corrección: Se agrega Comentario

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConfiguracionDeEvento,
      RolesDeUsuario,
      CodigoQr,
      RegistroDeAsistencia,
      Comentario, // Corrección: Se agrega Comentario
    ]),
  ],
  controllers: [ConfiguracionDeEventoController],
  providers: [ConfiguracionDeEventosService],
  exports: [ConfiguracionDeEventosService],
})
export class ConfiguracionDeEventoModule {}
