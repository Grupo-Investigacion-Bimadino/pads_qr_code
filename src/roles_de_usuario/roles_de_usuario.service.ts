import { Injectable } from '@nestjs/common';
import { CreateRolesDeUsuarioDto } from './dto/create-roles_de_usuario.dto';
import { UpdateRolesDeUsuarioDto } from './dto/update-roles_de_usuario.dto';

@Injectable()
export class RolesDeUsuarioService {
  create(createRolesDeUsuarioDto: CreateRolesDeUsuarioDto) {
    return 'This action adds a new rolesDeUsuario';
  }

  findAll() {
    return `This action returns all rolesDeUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolesDeUsuario`;
  }

  update(id: number, updateRolesDeUsuarioDto: UpdateRolesDeUsuarioDto) {
    return `This action updates a #${id} rolesDeUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolesDeUsuario`;
  }
}
