import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesDeUsuarioModule } from './roles_de_usuario/roles_de_usuario.module';
import { EventoModule } from './eventos/eventos.module';
import { CodigoQrModule } from './codigo_qr/codigo_qr.module';
import { ConfiguracionDeEventoModule } from './configuracion_de_eventos/configuracion_de_eventos.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { RegistroDeAsistenciaModule } from './registro_de_asistencia/registro_de_asistencia.module';
import { GeolocalizacionModule } from './geolocalización/geolocalización.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1215',
      database: 'qr',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CodigoQrModule,
    ComentariosModule,
    ConfiguracionDeEventoModule,
    EventoModule,
    GeolocalizacionModule,
    RegistroDeAsistenciaModule,
    RolesDeUsuarioModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
