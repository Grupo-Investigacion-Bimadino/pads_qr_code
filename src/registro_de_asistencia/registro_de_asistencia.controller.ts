import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { RegistroDeAsistenciaService } from './registro_de_asistencia.service';
import { CreateRegistroDeAsistenciaDto } from './dto/create-registro_de_asistencia.dto';

@Controller('registro-asistencia')
export class RegistroDeAsistenciaController {
  constructor(private readonly registroDeAsistenciaService: RegistroDeAsistenciaService) {}

  // Crear un nuevo registro de asistencia con validación del código QR y evento
  @Post()
  async create(@Body() dto: CreateRegistroDeAsistenciaDto) {
    return await this.registroDeAsistenciaService.create(dto);
  }

  // Obtener todos los registros de asistencia de un evento específico
  @Get('evento/:eventoId')
  async findAllByEvento(@Param('eventoId') eventoId: number) {
    return await this.registroDeAsistenciaService.findAllByEvento(eventoId);
  }

  // Obtener un registro de asistencia por su ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const registro = await this.registroDeAsistenciaService.findOne(id);
    if (!registro) {
      throw new NotFoundException(`Registro de asistencia con ID ${id} no encontrado.`);
    }
    return registro;
  }
}
