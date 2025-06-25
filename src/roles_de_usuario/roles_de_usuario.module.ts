import { Module } from '@nestjs/common';
import { RolesDeUsuarioService } from './roles_de_usuario.service';
import { RolesDeUsuarioController } from './roles_de_usuario.controller';

@Module({
  controllers: [RolesDeUsuarioController],
  providers: [RolesDeUsuarioService],
})
export class RolesDeUsuarioModule {}
