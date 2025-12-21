import { ApiProperty } from "@nestjs/swagger";

export class LoginSwaggerDto {
  @ApiProperty({
    description: "E-mail do usuário",
    example: "rafael@example.com",
  })
  email: string;

  @ApiProperty({
    description: "Senha",
    example: "minhaSenha123",
  })
  password: string;
}