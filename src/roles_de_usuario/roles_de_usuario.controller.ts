import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesDeUsuarioService } from './roles_de_usuario.service';
import { CreateRolesDeUsuarioDto } from './dto/create-roles_de_usuario.dto';
import { UpdateRolesDeUsuarioDto } from './dto/update-roles_de_usuario.dto';

@Controller('roles-de-usuario')
export class RolesDeUsuarioController {
  constructor(private readonly rolesDeUsuarioService: RolesDeUsuarioService) {}

  @Post()
  create(@Body() createRolesDeUsuarioDto: CreateRolesDeUsuarioDto) {
    return this.rolesDeUsuarioService.create(createRolesDeUsuarioDto);
  }

  @Get()
  findAll() {
    return this.rolesDeUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesDeUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolesDeUsuarioDto: UpdateRolesDeUsuarioDto) {
    return this.rolesDeUsuarioService.update(+id, updateRolesDeUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesDeUsuarioService.remove(+id);
  }
}
