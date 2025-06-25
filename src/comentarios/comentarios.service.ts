import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './entities/comentario.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Injectable()
export class ComentariosService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,

    @InjectRepository(ConfiguracionDeEvento)
    private readonly configuracionDeEventoRepository: Repository<ConfiguracionDeEvento>,
  ) {}

  // Crear comentario solo si la configuración permite comentarios
  async create(createDto: CreateComentarioDto): Promise<Comentario> {
    const configuracionEvento = await this.configuracionDeEventoRepository.findOneBy({ id: createDto.configuracionEventoId });

    if (!configuracionEvento) {
      throw new NotFoundException(`Configuración de evento con ID ${createDto.configuracionEventoId} no encontrada.`);
    }

    if (!configuracionEvento.comentariosActivados) {
      throw new BadRequestException(`Los comentarios están deshabilitados para este evento.`);
    }

    const nuevoComentario = this.comentarioRepository.create({
      contenido: createDto.contenido,
      configuracionEvento: configuracionEvento,
    });

    return await this.comentarioRepository.save(nuevoComentario);
  }

  // Obtener todos los comentarios de un evento solo si están activados
  async findAllPorEvento(eventoId: number): Promise<Comentario[]> {
    const evento = await this.configuracionDeEventoRepository.findOneBy({ id: eventoId });

    if (!evento || !evento.comentariosActivados) {
      throw new NotFoundException(`Los comentarios no están habilitados para este evento.`);
    }

    return await this.comentarioRepository.find({ where: { configuracionEvento: evento } });
  }

  // Obtener un comentario por ID
  async findOne(id: number): Promise<Comentario> {
    const comentario = await this.comentarioRepository.findOne({
      where: { id },
      relations: ['configuracionEvento'],
    });

    if (!comentario) {
      throw new NotFoundException(`Comentario con ID ${id} no encontrado.`);
    }

    return comentario;
  }

  // Actualizar un comentario
  async update(id: number, updateDto: UpdateComentarioDto): Promise<Comentario> {
    const comentario = await this.comentarioRepository.findOne({ where: { id } });

    if (!comentario) {
      throw new NotFoundException(`Comentario con ID ${id} no encontrado.`);
    }

    Object.assign(comentario, updateDto);
    return await this.comentarioRepository.save(comentario);
  }

  // Eliminar un comentario
  async remove(id: number): Promise<void> {
    const comentario = await this.comentarioRepository.findOne({ where: { id } });

    if (!comentario) {
      throw new NotFoundException(`Comentario con ID ${id} no encontrado.`);
    }

    await this.comentarioRepository.delete(id);
  }
}