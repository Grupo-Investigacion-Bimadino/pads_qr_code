import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CodigoQrService } from './codigo_qr.service';
import { CreateCodigoQrDto } from './dto/create-codigo_qr.dto';
import { UpdateCodigoQrDto } from './dto/update-codigo_qr.dto';

@Controller('codigo-qr')
export class CodigoQrController {
  constructor(private readonly codigoQrService: CodigoQrService) {}

  // Crear un nuevo código QR con un rol asociado
  @Post()
  async create(@Body() dto: CreateCodigoQrDto) {
    return await this.codigoQrService.create(dto);
  }

  // Obtener todos los códigos QR registrados
  @Get()
  async findAll() {
    return await this.codigoQrService.findAll();
  }

  // Obtener los detalles de un código QR por su ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const codigoQr = await this.codigoQrService.findOne(id);
    if (!codigoQr) {
      throw new NotFoundException(`Código QR con ID ${id} no encontrado.`);
    }
    return codigoQr;
  }

  // Actualizar un código QR existente
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateCodigoQrDto) {
    return await this.codigoQrService.update(id, dto);
  }

  // Eliminar un código QR por su ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.codigoQrService.remove(id);
  }
}