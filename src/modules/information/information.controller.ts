import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { InformationService } from './information.service';
import { InformationResponseDto } from './dtos/information-response.dto';
import { BaseResponseInterceptor } from 'src/common/interceptors/base-response.interceptor';

@Controller('information')
@UseInterceptors(BaseResponseInterceptor)
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Get('basic')
  async getData(
    @Query('cpf') cpf: string,
  ): Promise<InformationResponseDto> {
    return this.informationService.getBasicData(cpf);
  }
}
