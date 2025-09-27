import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { AssistantResponseDto } from './dtos/assistant-response.dto';
import { CustomException } from 'src/common/exeptions/custom.exeption';
import { ErrorCode } from 'src/shared/enums/error-code.enum';
import { ErrorMessages } from 'src/shared/constants/error-messages';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class AssistantService {
  async handleMessage(dto: CreateMessageDto): Promise<AssistantResponseDto> {
    // Simulando uma regra de negócio
    const promptValido = dto.message && dto.message.length >= 5;

    if (!promptValido) {
      throw new CustomException(
        ErrorCode.INVALID_PROMPT,
        ErrorMessages[ErrorCode.INVALID_PROMPT],
        HttpStatus.BAD_REQUEST
      );
    }

    // Mockado por enquanto, depois integrar com OpenAI
    return {
      response: `Você disse: ${dto.message}`,
      tokensUsed: 10,
      model: 'gpt-4',
    };
  }
}
