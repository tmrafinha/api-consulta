import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CompanySize } from "@prisma/client";

export class CreateCompanySwaggerDto {
  @ApiProperty({
    description: "Nome da empresa",
    example: "Nelson Heusi Group",
  })
  name: string;

  @ApiPropertyOptional({
    description: "Site da empresa",
    example: "https://www.nelsonheusi.com.br",
  })
  website?: string;

  @ApiPropertyOptional({
    description: "Descrição da empresa",
    example: "Consultoria especializada em comércio exterior e tecnologia.",
  })
  description?: string;

  @ApiPropertyOptional({
    description: "Indústria / setor da empresa",
    example: "Tecnologia / Comércio Exterior",
  })
  industry?: string;

  @ApiPropertyOptional({
    description: "Porte da empresa",
    enum: CompanySize,
    example: CompanySize.MEDIUM,
  })
  size?: CompanySize;
}