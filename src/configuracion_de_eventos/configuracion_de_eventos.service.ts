import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfiguracionDeEvento } from './entities/configuracion_de_evento.entity';
import { CreateConfiguracionDeEventoDto } from './dto/create-configuracion_de_evento.dto';
import { UpdateConfiguracionDeEventoDto } from './dto/update-configuracion_de_evento.dto';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';
import { RegistroDeAsistencia } from 'src/registro_de_asistencia/entities/registro_de_asistencia.entity';

@Injectable()
export class ConfiguracionDeEventosService {
  constructor(
    @InjectRepository(ConfiguracionDeEvento)
    private readonly configuracionDeEventoRepository: Repository<ConfiguracionDeEvento>,

    @InjectRepository(RolesDeUsuario)
    private readonly rolesDeUsuarioRepository: Repository<RolesDeUsuario>,

    @InjectRepository(CodigoQr)
    private readonly codigoQRRepository: Repository<CodigoQr>,

    @InjectRepository(RegistroDeAsistencia)
    private readonly registroDeAsistenciaRepository: Repository<RegistroDeAsistencia>,
  ) {}

  // Crear nueva configuración de evento con relaciones
  async create(createDto: CreateConfiguracionDeEventoDto): Promise<ConfiguracionDeEvento> {
    const nuevaConfiguracion = new ConfiguracionDeEvento();
    nuevaConfiguracion.nombre = createDto.nombre;
    nuevaConfiguracion.descripcion = createDto.descripcion;

    if (createDto.rolesUsuarioId) {
      nuevaConfiguracion.rolUsuario = await this.rolesDeUsuarioRepository.findOne({
        where: { id: createDto.rolesUsuarioId },
      });
    }

    if (createDto.codigoQRId) {
      nuevaConfiguracion.codigoQR = await this.codigoQRRepository.findOne({
        where: { id: createDto.codigoQRId },
      });
    }

    if (createDto.registroAsistenciaId) {
      nuevaConfiguracion.registroDeAsistencia = await this.registroDeAsistenciaRepository.findOne({
        where: { id: createDto.registroAsistenciaId },
      });
    }

    return await this.configuracionDeEventoRepository.save(nuevaConfiguracion);
  }

  // Obtener todas las configuraciones de eventos con sus relaciones
  async findAll(): Promise<ConfiguracionDeEvento[]> {
    return await this.configuracionDeEventoRepository.find({
      relations: ['evento', 'rolesDeUsuario', 'codigoQR', 'registroDeAsistencia'],
    });
  }

  // Obtener una configuración de evento por ID
  async findOne(id: number): Promise<ConfiguracionDeEvento> {
    const configuracion = await this.configuracionDeEventoRepository.findOne({
      where: { id },
      relations: ['evento', 'rolesDeUsuario', 'codigoQR', 'registroDeAsistencia'],
    });

    if (!configuracion) {
      throw new NotFoundException(`La configuración de evento con ID ${id} no fue encontrada.`);
    }

    return configuracion;
  }

  // Actualizar una configuración de evento con sus relaciones
  async update(id: number, updateDto: UpdateConfiguracionDeEventoDto): Promise<ConfiguracionDeEvento> {
    const configuracion = await this.configuracionDeEventoRepository.findOne({ where: { id } });

    if (!configuracion) {
      throw new NotFoundException(`La configuración de evento con ID ${id} no fue encontrada.`);
    }

    configuracion.nombre = updateDto.nombre ?? configuracion.nombre;
    configuracion.descripcion = updateDto.descripcion ?? configuracion.descripcion;

    if (updateDto.rolesUsuarioId) {
      configuracion.rolUsuario = await this.rolesDeUsuarioRepository.findOne({
        where: { id: updateDto.rolesUsuarioId },
      });
    }

    if (updateDto.codigoQRId) {
      configuracion.codigoQR = await this.codigoQRRepository.findOne({
        where: { id: updateDto.codigoQRId },
      });
    }

    if (updateDto.registroAsistenciaId) {
      configuracion.registroDeAsistencia = await this.registroDeAsistenciaRepository.findOne({
        where: { id: updateDto.registroAsistenciaId },
      });
    }

    await this.configuracionDeEventoRepository.save(configuracion);
    return configuracion;
  }

  // Eliminar una configuración de evento
  async remove(id: number): Promise<void> {
    const configuracion = await this.configuracionDeEventoRepository.findOne({ where: { id } });

    if (!configuracion) {
      throw new NotFoundException(`La configuración de evento con ID ${id} no fue encontrada.`);
    }

    await this.configuracionDeEventoRepository.delete(id);
  }
}