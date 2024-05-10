import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from 'src/config/database/data.base';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from '../patients/patients.module';
import { MedicalHistoriesModule } from '../medical_histories/medical_histories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    ConfigModule,
    PatientsModule,
    MedicalHistoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  private readonly logger = new Logger('AppModule');

  constructor() {
    this.logger.log('AppModule initialized');
  }

}
