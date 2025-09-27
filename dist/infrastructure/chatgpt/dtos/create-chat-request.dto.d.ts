import { ChatGptModels } from '../constants/chatgpt.constants';
export declare class CreateChatRequestDto {
    prompt: string;
    model?: ChatGptModels;
    temperature?: number;
}
