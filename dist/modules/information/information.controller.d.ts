import { InformationService } from './information.service';
import { InformationResponseDto } from './dtos/information-response.dto';
export declare class InformationController {
    private readonly informationService;
    constructor(informationService: InformationService);
    getData(cpf: string): Promise<InformationResponseDto>;
}
