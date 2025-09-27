import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';

@Module({
  imports: [HttpModule], // <---- IMPORTANTE!
  controllers: [InformationController],
  providers: [InformationService],
  exports: [InformationService],
})
export class InformationModule {}
