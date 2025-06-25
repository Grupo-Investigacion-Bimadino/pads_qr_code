import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDeAsistenciaService } from './registro_de_asistencia.service';

describe('RegistroDeAsistenciaService', () => {
  let service: RegistroDeAsistenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroDeAsistenciaService],
    }).compile();

    service = module.get<RegistroDeAsistenciaService>(RegistroDeAsistenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
