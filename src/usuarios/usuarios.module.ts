import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}