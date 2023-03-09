import { Module } from '@nestjs/common';
import { PocController } from './controller/poc.controller';
import { PocService } from './service/poc.service';

@Module({
  controllers: [PocController],
  providers: [PocService]
})
export class PocModule {}
