import { Test, TestingModule } from '@nestjs/testing';
import { GeolocalizaciónService } from './geolocalización.service';

describe('GeolocalizaciónService', () => {
  let service: GeolocalizaciónService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeolocalizaciónService],
    }).compile();

    service = module.get<GeolocalizaciónService>(GeolocalizaciónService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
