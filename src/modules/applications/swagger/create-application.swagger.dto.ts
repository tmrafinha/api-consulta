import { ApiProperty } from "@nestjs/swagger";

export class CreateApplicationSwaggerDto {
  @ApiProperty({
    description: "ID da vaga (Job) para a qual o candidato está aplicando",
    format: "uuid",
    example: "cmiut1iiz0000n10cfzrg54yw",
  })
  jobId: string;

  @ApiProperty({
    description: "ID do currículo (Resume) que será usado na aplicação",
    format: "uuid",
    example: "cmixw8r7e00000v0cxrl9760j",
  })
  resumeId: string;

  @ApiProperty({
    description: "Carta de apresentação opcional",
    required: false,
    example: "Tenho 5 anos de experiência com Node.js e NestJS...",
  })
  coverLetter?: string;

  @ApiProperty({
    description:
      "ID do candidato. Hoje vem no body, mas idealmente deveria vir do token (CurrentUser)",
    format: "uuid",
    example: "cmiut1iiz0000n10cfzrg54yw",
  })
  candidateId: string;
}