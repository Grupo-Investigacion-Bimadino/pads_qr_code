import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosService } from './comentarios.service';
import { Comentario } from './entities/comentario.entity';
import { ComentariosController } from './comentarios.controller';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario, ConfiguracionDeEvento])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
  exports: [ComentariosService],
})
export class ComentariosModule {}

