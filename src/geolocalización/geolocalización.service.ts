import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Geolocalizacion } from './entities/geolocalización.entity';
import { CreateGeolocalizacionDto } from './dto/create-geolocalización.dto';
import { UpdateGeolocalizacionDto } from './dto/update-geolocalización.dto';
import { ConfiguracionDeEvento } from 'src/configuracion_de_eventos/entities/configuracion_de_evento.entity';
import { CodigoQr } from 'src/codigo_qr/entities/codigo_qr.entity';

@Injectable()
export class GeolocalizacionService {
  constructor(
    @InjectRepository(Geolocalizacion)
    private readonly geolocalizacionRepository: Repository<Geolocalizacion>,

    @InjectRepository(ConfiguracionDeEvento)
    private readonly configuracionEventoRepository: Repository<ConfiguracionDeEvento>,

    @InjectRepository(CodigoQr)
    private readonly codigoQrRepository: Repository<CodigoQr>,
  ) {}

  // Método para crear una nueva geolocalización vinculada a un evento y código QR
  async create(dto: CreateGeolocalizacionDto): Promise<Geolocalizacion> {
    const evento = await this.configuracionEventoRepository.findOne({ where: { id: dto.configuracionEventoId } });
    if (!evento) throw new NotFoundException('Configuración del evento no encontrada');

    const codigoQr = dto.codigoQrId ? await this.codigoQrRepository.findOne({ where: { id: dto.codigoQrId } }) : null;
    
    const nuevaGeolocalizacion = this.geolocalizacionRepository.create({
      latitud: dto.latitud,
      longitud: dto.longitud,
      configuracionEvento: evento,
      codigoQr,
    });

    return await this.geolocalizacionRepository.save(nuevaGeolocalizacion);
  }

  // Método para obtener todas las geolocalizaciones registradas
  async findAll(): Promise<Geolocalizacion[]> {
    return await this.geolocalizacionRepository.find({ relations: ['configuracionEvento', 'codigoQr'] });
  }

  // Método para obtener una geolocalización específica por ID
  async findOne(id: number): Promise<Geolocalizacion> {
    const geolocalizacion = await this.geolocalizacionRepository.findOne({ where: { id }, relations: ['configuracionEvento', 'codigoQr'] });
    if (!geolocalizacion) throw new NotFoundException(`Geolocalización con ID ${id} no encontrada`);
    
    return geolocalizacion;
  }

  // Método para actualizar una geolocalización
  async update(id: number, dto: UpdateGeolocalizacionDto): Promise<Geolocalizacion> {
    const geolocalizacion = await this.geolocalizacionRepository.findOne({ where: { id } });
    if (!geolocalizacion) throw new NotFoundException(`Geolocalización con ID ${id} no encontrada`);

    Object.assign(geolocalizacion, dto);
    return await this.geolocalizacionRepository.save(geolocalizacion);
  }

  // Método para eliminar una geolocalización
  async remove(id: number): Promise<void> {
    const geolocalizacion = await this.geolocalizacionRepository.findOne({ where: { id } });
    if (!geolocalizacion) throw new NotFoundException(`Geolocalización con ID ${id} no encontrada`);

    await this.geolocalizacionRepository.remove(geolocalizacion);
  }
}