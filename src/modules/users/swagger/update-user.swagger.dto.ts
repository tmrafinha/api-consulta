import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateUserSwaggerDto {
  @ApiPropertyOptional({
    example: "John Doe Atualizado",
    description: "Nome do usuário",
    minLength: 2,
  })
  name?: string;
}