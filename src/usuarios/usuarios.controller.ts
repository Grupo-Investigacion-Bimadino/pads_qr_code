import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuariosService) {}

  // Obtener todos los usuarios
  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  // Obtener usuario por ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usuarioService.findOne(id);
  }

  // Crear nuevo usuario con validación de DTO
  @Post()
  async create(@Body() usuarioDto: CreateUsuarioDto) {
    return await this.usuarioService.create(usuarioDto);
  }

  // Actualizar usuario con validación de DTO
  @Put(':id')
  async update(@Param('id') id: number, @Body() usuarioDto: UpdateUsuarioDto) {
    return await this.usuarioService.update(id, usuarioDto);
  }

  // Eliminar usuario
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.usuarioService.delete(id);
  }
}