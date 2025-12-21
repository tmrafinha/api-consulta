import { ApiProperty } from "@nestjs/swagger";

export class CreateUserSwaggerDto {
  @ApiProperty({
    example: "john.doe@example.com",
    description: "E-mail do usuário",
  })
  email: string;

  @ApiProperty({
    example: "John Doe",
    description: "Nome do usuário",
  })
  name: string;

  @ApiProperty({
    example: "senhaSuperSecreta123",
    minLength: 6,
    description: "Senha do usuário (mínimo 6 caracteres)",
  })
  password: string;
}