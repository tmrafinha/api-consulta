import { HttpService } from '@nestjs/axios';
import { InformationResponseDto } from './dtos/information-response.dto';
import { ConfigService } from '@nestjs/config';
export declare class InformationService {
    private readonly httpService;
    private readonly configService;
    private readonly BASE_URL;
    constructor(httpService: HttpService, configService: ConfigService);
    getBasicData(cpf: string): Promise<InformationResponseDto>;
}
