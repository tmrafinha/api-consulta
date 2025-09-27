import { Injectable, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InformationResponseDto } from './dtos/information-response.dto';
import { CustomException } from 'src/common/exeptions/custom.exeption';
import { ErrorCode } from 'src/shared/enums/error-code.enum';
import { ErrorMessages } from 'src/shared/constants/error-messages';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InformationService {
  private readonly BASE_URL = 'https://checkdata.vip/api/consultas';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getBasicData(cpf: string): Promise<InformationResponseDto> {
    try {
      const token = this.configService.get<string>('CHECKDATA_TOKEN');
      const url = `${this.BASE_URL}/cpf_basico?query=${cpf}&token=${token}`;

      const response = await firstValueFrom(
        this.httpService.get<InformationResponseDto>(url),
      );

      return response.data;
    } catch (error) {
      throw new CustomException(
        ErrorCode.EXTERNAL_API_ERROR,
        ErrorMessages[ErrorCode.EXTERNAL_API_ERROR] ?? 
          'Erro ao consultar serviço externo',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
