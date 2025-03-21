import { Facility } from "../entities/facility.entity";

export const FACILITY_REPOSITORY = 'FACILITY_REPOSITORY';

export interface IFacilityRepository {
  findAll(): Promise<Facility[]>;
}
