import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDeAsistenciaController } from './registro_de_asistencia.controller';
import { RegistroDeAsistenciaService } from './registro_de_asistencia.service';

describe('RegistroDeAsistenciaController', () => {
  let controller: RegistroDeAsistenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroDeAsistenciaController],
      providers: [RegistroDeAsistenciaService],
    }).compile();

    controller = module.get<RegistroDeAsistenciaController>(RegistroDeAsistenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
