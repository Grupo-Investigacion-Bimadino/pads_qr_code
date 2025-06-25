import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}
  // Crear usuario con validación del DTO
  async create(usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(usuarioDto);
    return await this.usuarioRepository.save(nuevoUsuario);
  }
  // Actualizar usuario con validación del DTO
  async update(id: number, usuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuarioDto);
    return await this.findOne(id);
  }
  // Obtener usuario por ID
  async findOne(id: number): Promise<Usuario | null> {
  return await this.usuarioRepository.findOne({ where: { id }, relations: ['RolesDeUsuario'] });
}
// Obtener todos los usuarios con su rol asociado
async findAll(): Promise<Usuario[]> {
  return await this.usuarioRepository.find({ relations: ['RolesDeUsuario'] });
}
// Eliminar usuario
async delete(id: number): Promise<void> {
  await this.usuarioRepository.delete(id);
}
}
