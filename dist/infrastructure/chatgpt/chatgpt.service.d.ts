import { HttpService } from '@nestjs/axios';
import { CreateChatRequestDto } from './dtos/create-chat-request.dto';
import { ChatGptResponseDto } from './dtos/chatgpt-response.dto';
export declare class ChatGptService {
    private readonly http;
    constructor(http: HttpService);
    sendChat(req: CreateChatRequestDto): Promise<ChatGptResponseDto>;
}
