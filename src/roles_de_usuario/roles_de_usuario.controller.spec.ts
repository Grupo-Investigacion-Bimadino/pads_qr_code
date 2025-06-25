import { Test, TestingModule } from '@nestjs/testing';
import { RolesDeUsuarioController } from './roles_de_usuario.controller';
import { RolesDeUsuarioService } from './roles_de_usuario.service';

describe('RolesDeUsuarioController', () => {
  let controller: RolesDeUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesDeUsuarioController],
      providers: [RolesDeUsuarioService],
    }).compile();

    controller = module.get<RolesDeUsuarioController>(RolesDeUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
