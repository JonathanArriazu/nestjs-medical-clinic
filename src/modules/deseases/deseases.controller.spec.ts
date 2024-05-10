import { Test, TestingModule } from '@nestjs/testing';
import { DeseasesController } from './deseases.controller';
import { DeseasesService } from './deseases.service';

describe('DeseasesController', () => {
  let controller: DeseasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeseasesController],
      providers: [DeseasesService],
    }).compile();

    controller = module.get<DeseasesController>(DeseasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
