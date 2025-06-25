import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionDeEventoController } from './configuracion_de_eventos.controller';
import { ConfiguracionDeEventosService } from './configuracion_de_eventos.service';

describe('ConfiguracionDeEventosController', () => {
  let controller: ConfiguracionDeEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfiguracionDeEventoController],
      providers: [ConfiguracionDeEventosService],
    }).compile();

    controller = module.get<ConfiguracionDeEventoController>(ConfiguracionDeEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
