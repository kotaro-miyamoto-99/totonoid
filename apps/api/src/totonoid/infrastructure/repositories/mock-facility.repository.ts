import { Injectable } from '@nestjs/common';
import { Facility } from '../../domain/entities/facility.entity';
import { IFacilityRepository } from '../../domain/repositories/facility.repository';

@Injectable()
export class MockFacilityRepository implements IFacilityRepository {
  private readonly mockFacilities: Facility[] = [
    new Facility(
      '1',
      'サウナしきじ',
      '静岡県静岡市駿河区',
      '日本最大級のサウナ施設。美しい富士山を望める露天風呂付き。',
      90,
      15,
      4.8,
      ['露天風呂', '水風呂', '外気浴'],
      new Date().toISOString(),
      new Date().toISOString()
    ),
    new Facility(
      '2',
      'フィンランドサウナ',
      '東京都渋谷区',
      '本場フィンランドのサウナを完全再現。ロウリュサービスが人気。',
      95,
      14,
      4.9,
      ['ロウリュ', '外気浴'],
      new Date().toISOString(),
      new Date().toISOString()
    ),
    new Facility(
      '3',
      '天然温泉 テルマー湯',
      '東京都豊島区',
      '天然温泉とサウナを楽しめる都会のオアシス。',
      85,
      16,
      4.5,
      ['天然温泉', '岩盤浴'],
      new Date().toISOString(),
      new Date().toISOString()
    ),
  ];

  async findAll(): Promise<Facility[]> {
    return this.mockFacilities;
  }
}
