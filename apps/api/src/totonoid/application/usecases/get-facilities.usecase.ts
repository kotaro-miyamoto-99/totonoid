import { Inject, Injectable } from '@nestjs/common';
import { IFacilityRepository, FACILITY_REPOSITORY } from '../../domain/repositories/facility.repository';
import { Facility } from '../../domain/entities/facility.entity';

@Injectable()
export class GetFacilitiesUseCase {
  constructor(
    @Inject(FACILITY_REPOSITORY)
    private readonly facilityRepository: IFacilityRepository
  ) {}

  async execute(): Promise<Facility[]> {
    return this.facilityRepository.findAll();
  }
}
