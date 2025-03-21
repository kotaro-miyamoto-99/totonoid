import { Test, TestingModule } from '@nestjs/testing';
import { FacilitiesController } from '../src/presentation/controllers/facilities.controller';
import { GetFacilitiesUseCase } from '../src/application/usecases/get-facilities.usecase';
import { MockFacilityRepository } from '../src/infrastructure/repositories/mock-facility.repository';
import { FACILITY_REPOSITORY } from '../src/domain/facilities/facility.repository';

describe('FacilitiesController', () => {
  let controller: FacilitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacilitiesController],
      providers: [
        GetFacilitiesUseCase,
        {
          provide: FACILITY_REPOSITORY,
          useClass: MockFacilityRepository,
        },
      ],
    }).compile();

    controller = module.get<FacilitiesController>(FacilitiesController);
  });

  describe('getFacilities', () => {
    it('should return an array of facilities', async () => {
      const result = await controller.getFacilities();
      
      expect(result.facilities).toBeDefined();
      expect(Array.isArray(result.facilities)).toBe(true);
      expect(result.facilities.length).toBeGreaterThan(0);
      
      const facility = result.facilities[0];
      expect(facility).toHaveProperty('id');
      expect(facility).toHaveProperty('name');
      expect(facility).toHaveProperty('address');
      expect(facility).toHaveProperty('description');
      expect(facility).toHaveProperty('rating');
      expect(facility).toHaveProperty('price');
      expect(facility).toHaveProperty('imageUrl');
      expect(facility).toHaveProperty('amenities');
      expect(facility).toHaveProperty('openingHours');
    });
  });
});
