import { Test, TestingModule } from '@nestjs/testing';
import { GeolocalizaciónController } from './geolocalización.controller';
import { GeolocalizaciónService } from './geolocalización.service';

describe('GeolocalizaciónController', () => {
  let controller: GeolocalizaciónController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeolocalizaciónController],
      providers: [GeolocalizaciónService],
    }).compile();

    controller = module.get<GeolocalizaciónController>(GeolocalizaciónController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
