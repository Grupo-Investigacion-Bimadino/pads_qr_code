import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodigoQr } from './entities/codigo_qr.entity';
import { CreateCodigoQrDto } from './dto/create-codigo_qr.dto';
import { UpdateCodigoQrDto } from './dto/update-codigo_qr.dto';
import { RegistroDeAsistencia } from 'src/registro_de_asistencia/entities/registro_de_asistencia.entity';
import { RolesDeUsuario } from 'src/roles_de_usuario/entities/roles_de_usuario.entity';

@Injectable()
export class CodigoQrService {
  constructor(
    @InjectRepository(CodigoQr)
    private readonly codigoQrRepository: Repository<CodigoQr>,
    
    @InjectRepository(RegistroDeAsistencia)
    private readonly registroDeAsistenciaRepository: Repository<RegistroDeAsistencia>,

    @InjectRepository(RolesDeUsuario)
    private readonly rolesDeUsuarioRepository: Repository<RolesDeUsuario>,
  ) {}

  // Método para generar un nuevo código QR con un rol asociado
  async create(dto: CreateCodigoQrDto): Promise<CodigoQr> {
    const rolUsuario = await this.rolesDeUsuarioRepository.findOne({ where: { id: dto.rolesUsuarioId } });
    if (!rolUsuario) {
      throw new NotFoundException('Rol de usuario no encontrado');
    }

    const nuevoCodigoQr = this.codigoQrRepository.create({ codigo: dto.codigo, rolUsuario });
    return await this.codigoQrRepository.save(nuevoCodigoQr);
  }

  // Método para validar un código QR y registrar asistencia al evento
  async validarQr(codigo: string, usuarioId: number): Promise<RegistroDeAsistencia> {
    const codigoQr = await this.codigoQrRepository.findOne({ where: { codigo }, relations: ['rolUsuario'] });
    if (!codigoQr) {
      throw new NotFoundException('Código QR no válido');
    }

    const usuario = await this.rolesDeUsuarioRepository.findOne({ where: { id: usuarioId } });
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const nuevoRegistro = this.registroDeAsistenciaRepository.create({ codigoQr, usuario });
    return await this.registroDeAsistenciaRepository.save(nuevoRegistro);
  }

  // Método para obtener todos los códigos QR registrados
  async findAll(): Promise<CodigoQr[]> {
    return await this.codigoQrRepository.find({ relations: ['rolUsuario', 'registrosDeAsistencia'] });
  }

  // Método para obtener los detalles de un código QR por su ID
  async findOne(id: number): Promise<CodigoQr> {
    const codigoQr = await this.codigoQrRepository.findOne({ where: { id }, relations: ['rolUsuario', 'registrosDeAsistencia'] });
    if (!codigoQr) {
      throw new NotFoundException(`Código QR con ID ${id} no encontrado.`);
    }
    return codigoQr;
  }

  // Método para actualizar un código QR
  async update(id: number, dto: UpdateCodigoQrDto): Promise<CodigoQr> {
    const codigoQr = await this.codigoQrRepository.findOne({ where: { id } });
    if (!codigoQr) {
      throw new NotFoundException(`Código QR con ID ${id} no encontrado.`);
    }

    Object.assign(codigoQr, dto);
    return await this.codigoQrRepository.save(codigoQr);
  }

  // Método para eliminar un código QR
  async remove(id: number): Promise<void> {
    const codigoQr = await this.codigoQrRepository.findOne({ where: { id } });
    if (!codigoQr) {
      throw new NotFoundException(`Código QR con ID ${id} no encontrado.`);
    }

    await this.codigoQrRepository.remove(codigoQr);
  }
}