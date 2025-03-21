import { Module } from '@nestjs/common';
import { FacilitiesModule } from './totonoid/facilities.module';

@Module({
  imports: [FacilitiesModule],
})
export class AppModule {}
