import { AssistantService } from './assistant.service';
import { CreateMessageDto } from 'src/modules/assistant/dtos/create-message.dto';
import { AssistantResponseDto } from 'src/modules/assistant/dtos/assistant-response.dto';
export declare class AssistantController {
    private readonly assistantService;
    constructor(assistantService: AssistantService);
    sendMessage(dto: CreateMessageDto): Promise<AssistantResponseDto>;
}
