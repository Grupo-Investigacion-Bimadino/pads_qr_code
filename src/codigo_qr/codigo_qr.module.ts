import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodigoQrService } from './codigo_qr.service';
import { CodigoQrController } from './codigo_qr.controller';
import { CodigoQr } from './entities/codigo_qr.entity';
import { RegistroDeAsistencia } from 'src/registro_de_asistencia/entities/registro_de_asistencia.entity';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';

@Module({
  imports: [
    // Registro de entidades en TypeORM
    TypeOrmModule.forFeature([CodigoQr, RegistroDeAsistencia, RolesDeUsuario]),
  ],
  controllers: [CodigoQrController], // Registro del controlador
  providers: [CodigoQrService], // Registro del servicio
  exports: [CodigoQrService], // Exportar el servicio para otros módulos
})
export class CodigoQrModule {}