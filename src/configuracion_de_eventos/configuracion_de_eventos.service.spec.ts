import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionDeEventosService } from './configuracion_de_eventos.service';

describe('ConfiguracionDeEventosService', () => {
  let service: ConfiguracionDeEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfiguracionDeEventosService],
    }).compile();

    service = module.get<ConfiguracionDeEventosService>(ConfiguracionDeEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
