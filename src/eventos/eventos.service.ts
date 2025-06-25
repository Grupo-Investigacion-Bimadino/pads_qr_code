import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventoService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}
  // Obtener todos los eventos
  async findAll(): Promise<Evento[]> {
    return await this.eventoRepository.find();
  }
  // Obtener un evento por ID
  async findOne(id: number): Promise<Evento | null> {
    return await this.eventoRepository.findOne({ where: { id } });
  }
  // Crear nuevo evento con validación de DTO
  async create(eventoDto: CreateEventoDto): Promise<Evento> {
    const nuevoEvento = this.eventoRepository.create(eventoDto);
    return await this.eventoRepository.save(nuevoEvento);
  }
  // Actualizar evento con validación de DTO
  async update(id: number, eventoDto: UpdateEventoDto): Promise<Evento> {
    await this.eventoRepository.update(id, eventoDto);
    return await this.findOne(id);
  }
  // Eliminar evento
  async delete(id: number): Promise<void> {
    await this.eventoRepository.delete(id);
  }
}