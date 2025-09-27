import { CreateMessageDto } from './dtos/create-message.dto';
import { AssistantResponseDto } from './dtos/assistant-response.dto';
export declare class AssistantService {
    handleMessage(dto: CreateMessageDto): Promise<AssistantResponseDto>;
}
