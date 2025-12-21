import { ApiProperty } from "@nestjs/swagger";

export class RegisterSwaggerDto {
  @ApiProperty({
    description: "Nome do usuário",
    example: "Rafael Moreira",
  })
  name: string;

  @ApiProperty({
    description: "E-mail do usuário",
    example: "rafael@example.com",
  })
  email: string;

  @ApiProperty({
    description: "Senha (mínimo 6 caracteres)",
    example: "minhaSenha123",
    minLength: 6,
  })
  password: string;
}