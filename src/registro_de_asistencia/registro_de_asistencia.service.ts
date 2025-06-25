import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistroDeAsistencia } from './entities/registro_de_asistencia.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { CreateRegistroDeAsistenciaDto } from './dto/create-registro_de_asistencia.dto';

@Injectable()
export class RegistroDeAsistenciaService {
  constructor(
    @InjectRepository(RegistroDeAsistencia)
    private readonly registroDeAsistenciaRepository: Repository<RegistroDeAsistencia>,

    @InjectRepository(CodigoQr)
    private readonly codigoQrRepository: Repository<CodigoQr>,

    @InjectRepository(ConfiguracionDeEvento)
    private readonly configuracionDeEventoRepository: Repository<ConfiguracionDeEvento>,
  ) {}

  // Crear registro de asistencia validando el código QR y el evento
  async create(dto: CreateRegistroDeAsistenciaDto): Promise<RegistroDeAsistencia> {
    const codigoQr = await this.codigoQrRepository.findOne({ where: { id: dto.codigoQrId } });
    if (!codigoQr) {
      throw new NotFoundException('Código QR no encontrado');
    }

    const configuracionEvento = await this.configuracionDeEventoRepository.findOne({ where: { id: dto.configuracionEventoId } });
    if (!configuracionEvento) {
      throw new NotFoundException('Configuración del evento no encontrada');
    }

    const nuevoRegistro = this.registroDeAsistenciaRepository.create({ ...dto, codigoQr, configuracionEvento });
    return await this.registroDeAsistenciaRepository.save(nuevoRegistro);
  }

  // Obtener todos los registros de asistencia de un evento
  async findAllByEvento(eventoId: number): Promise<RegistroDeAsistencia[]> {
    return await this.registroDeAsistenciaRepository.find({ where: { configuracionEvento: { id: eventoId } }, relations: ['codigoQr', 'configuracionEvento'] });
  }

  // Obtener un registro específico
  async findOne(id: number): Promise<RegistroDeAsistencia> {
    const registro = await this.registroDeAsistenciaRepository.findOne({ where: { id }, relations: ['codigoQr', 'configuracionEvento'] });
    if (!registro) {
      throw new NotFoundException(`Registro de asistencia con ID ${id} no encontrado.`);
    }
    return registro;
  }
}