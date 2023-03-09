import { Module } from '@nestjs/common';
import { PocModule } from './poc/poc.module';


@Module({
  imports: [PocModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
