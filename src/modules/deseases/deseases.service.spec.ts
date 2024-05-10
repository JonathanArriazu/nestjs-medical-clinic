import { Test, TestingModule } from '@nestjs/testing';
import { DeseasesService } from './deseases.service';

describe('DeseasesService', () => {
  let service: DeseasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeseasesService],
    }).compile();

    service = module.get<DeseasesService>(DeseasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
