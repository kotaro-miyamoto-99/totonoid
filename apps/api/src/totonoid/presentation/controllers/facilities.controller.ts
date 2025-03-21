import { Controller, Get } from '@nestjs/common';
import { GetFacilitiesUseCase } from '../../application/usecases/get-facilities.usecase';
import type { FacilityResponse } from '@totonoido/shared-types';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly getFacilitiesUseCase: GetFacilitiesUseCase) {}

  @Get()
  async getFacilities(): Promise<FacilityResponse> {
    const facilities = await this.getFacilitiesUseCase.execute();
    return {
      facilities: facilities.map(facility => facility.toJSON()),
    };
  }
}
