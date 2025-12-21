import { ApiProperty } from "@nestjs/swagger";

export class ResumeUploadSwaggerDto {
  @ApiProperty({
    type: "string",
    format: "binary",
    description: "Arquivo PDF do currículo",
  })
  file: any;
}