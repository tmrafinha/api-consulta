import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { CreateMessageDto } from 'src/modules/assistant/dtos/create-message.dto';
import { AssistantResponseDto } from 'src/modules/assistant/dtos/assistant-response.dto';
import { BaseResponseInterceptor } from 'src/common/interceptors/base-response.interceptor';

@Controller('assistant')
@UseInterceptors(BaseResponseInterceptor)
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) {}

  @Post('message')
  async sendMessage(
    @Body() dto: CreateMessageDto,
  ): Promise<AssistantResponseDto> {
    return this.assistantService.handleMessage(dto);
  }
}
