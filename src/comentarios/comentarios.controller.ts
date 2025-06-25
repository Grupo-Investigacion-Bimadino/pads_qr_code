import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  // Crear un comentario solo si la configuración del evento lo permite
  @Post()
  async create(@Body() createComentarioDto: CreateComentarioDto) {
    return await this.comentariosService.create(createComentarioDto);
  }

  // Obtener todos los comentarios de un evento, si los comentarios están activados
  @Get('evento/:eventoId')
  async findAllPorEvento(@Param('eventoId') eventoId: number) {
    return await this.comentariosService.findAllPorEvento(eventoId);
  }

  // Obtener un comentario por su ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const comentario = await this.comentariosService.findOne(id);
    if (!comentario) {
      throw new NotFoundException(`Comentario con ID ${id} no encontrado.`);
    }
    return comentario;
  }

  // Actualizar un comentario existente
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateComentarioDto: UpdateComentarioDto) {
    return await this.comentariosService.update(id, updateComentarioDto);
  }

  // Eliminar un comentario por su ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.comentariosService.remove(id);
  }
}