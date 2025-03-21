import { Module } from '@nestjs/common';
import { FacilitiesController } from './presentation/controllers/facilities.controller';
import { GetFacilitiesUseCase } from './application/usecases/get-facilities.usecase';
import { MockFacilityRepository } from './infrastructure/repositories/mock-facility.repository';
import { FACILITY_REPOSITORY } from './domain/repositories/facility.repository';

@Module({
  controllers: [FacilitiesController],
  providers: [
    GetFacilitiesUseCase,
    {
      provide: FACILITY_REPOSITORY,
      useClass: MockFacilityRepository,
    },
  ],
})
export class FacilitiesModule {}
