import { Test, TestingModule } from '@nestjs/testing';
import { RolesDeUsuarioService } from './roles_de_usuario.service';

describe('RolesDeUsuarioService', () => {
  let service: RolesDeUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesDeUsuarioService],
    }).compile();

    service = module.get<RolesDeUsuarioService>(RolesDeUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
