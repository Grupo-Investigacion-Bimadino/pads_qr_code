import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { GeolocalizacionService } from './geolocalización.service';
import { CreateGeolocalizacionDto } from './dto/create-geolocalización.dto';
import { UpdateGeolocalizacionDto } from './dto/update-geolocalización.dto';

@Controller('geolocalizacion')
export class GeolocalizacionController {
  constructor(private readonly geolocalizacionService: GeolocalizacionService) {}

  // Crear una nueva geolocalización vinculada a un evento y opcionalmente a un código QR
  @Post()
  async create(@Body() dto: CreateGeolocalizacionDto) {
    return await this.geolocalizacionService.create(dto);
  }

  // Obtener todas las geolocalizaciones registradas
  @Get()
  async findAll() {
    return await this.geolocalizacionService.findAll();
  }

  // Obtener los detalles de una geolocalización por su ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const geolocalizacion = await this.geolocalizacionService.findOne(id);
    if (!geolocalizacion) {
      throw new NotFoundException(`Geolocalización con ID ${id} no encontrada.`);
    }
    return geolocalizacion;
  }

  // Actualizar una geolocalización existente
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateGeolocalizacionDto) {
    return await this.geolocalizacionService.update(id, dto);
  }

  // Eliminar una geolocalización por su ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.geolocalizacionService.remove(id);
  }
}