import { Controller, Get, Post, Body, Param, Patch, Delete, NotFoundException } from '@nestjs/common';
import { ConfiguracionDeEventosService } from './configuracion_de_eventos.service';
import { CreateConfiguracionDeEventoDto } from './dto/create-configuracion_de_evento.dto';
import { UpdateConfiguracionDeEventoDto } from './dto/update-configuracion_de_evento.dto';

@Controller('configuracion-evento')
export class ConfiguracionDeEventoController {
  constructor(private readonly configuracionDeEventosService: ConfiguracionDeEventosService) {}

  // Crear una nueva configuración de evento
  @Post()
  async create(@Body() createDto: CreateConfiguracionDeEventoDto) {
    return await this.configuracionDeEventosService.create(createDto);
  }

  // Obtener todas las configuraciones de eventos con relaciones
  @Get()
  async findAll() {
    return await this.configuracionDeEventosService.findAll();
  }

  // Obtener una configuración de evento por ID con relaciones
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const configuracion = await this.configuracionDeEventosService.findOne(id);
    if (!configuracion) {
      throw new NotFoundException(`Configuración de evento con ID ${id} no encontrada.`);
    }
    return configuracion;
  }

  // Actualizar configuración de evento y sus relaciones
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateDto: UpdateConfiguracionDeEventoDto) {
    return await this.configuracionDeEventosService.update(id, updateDto);
  }

  // Eliminar una configuración de evento
  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.configuracionDeEventosService.remove(id);
    return { message: `Configuración de evento con ID ${id} eliminada correctamente.` };
  }
}