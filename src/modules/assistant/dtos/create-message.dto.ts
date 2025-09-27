import { IsString, IsOptional } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  userId: string;

  @IsString()
  message: string;

  @IsOptional()
  metadata?: Record<string, any>;
}
