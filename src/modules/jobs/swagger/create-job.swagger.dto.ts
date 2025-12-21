import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { EmploymentType, WorkModel } from "@prisma/client";

export class CreateJobSwaggerDto {
  @ApiProperty({
    description: "ID da empresa dona da vaga",
    format: "uuid",
    example: "cmiut1iiz0000n10cfzrg54yw",
  })
  companyId: string;

  @ApiProperty({
    description: "Título da vaga",
    minLength: 3,
    example: "Desenvolvedor Full Stack Pleno",
  })
  title: string;

  @ApiProperty({
    description:
      "Slug da vaga (somente letras minúsculas, números e hífens, ex: dev-fullstack-pl)",
    minLength: 3,
    pattern: "^[a-z0-9-]+$",
    example: "desenvolvedor-fullstack-pleno",
  })
  slug: string;

  @ApiProperty({
    description: "Descrição detalhada da vaga",
    minLength: 10,
    example: "Estamos buscando um dev full stack para atuar com NestJS e React...",
  })
  description: string;

  @ApiProperty({
    description: "Tipo de contratação",
    enum: EmploymentType,
    enumName: "EmploymentType",
    example: EmploymentType.CLT,
  })
  employmentType: EmploymentType;

  @ApiProperty({
    description: "Modelo de trabalho",
    enum: WorkModel,
    enumName: "WorkModel",
    example: WorkModel.HYBRID,
  })
  workModel: WorkModel;

  @ApiPropertyOptional({
    description: "Localização (cidade / estado ou 'Remoto')",
    example: "Itajaí - SC",
  })
  location?: string;

  @ApiPropertyOptional({
    description: "Salário mínimo (pode ser nulo se não informado)",
    minimum: 0,
    nullable: true,
    type: Number,
    example: 5000,
  })
  salaryMin?: number | null;

  @ApiPropertyOptional({
    description: "Salário máximo (pode ser nulo se não informado)",
    nullable: true,
    type: Number,
    example: 9000,
  })
  salaryMax?: number | null;

  @ApiPropertyOptional({
    description: "Stack de tecnologias",
    type: [String],
    example: ["Node.js", "NestJS", "PostgreSQL"],
    default: [],
  })
  techStack?: string[];

  @ApiPropertyOptional({
    description: "Responsabilidades principais",
    type: [String],
    example: ["Desenvolver APIs REST", "Dar manutenção em serviços existentes"],
    default: [],
  })
  responsibilities?: string[];

  @ApiPropertyOptional({
    description: "Requisitos obrigatórios",
    type: [String],
    example: ["3+ anos de experiência com Node.js"],
    default: [],
  })
  requirementsMust?: string[];

  @ApiPropertyOptional({
    description: "Requisitos desejáveis",
    type: [String],
    example: ["Experiência com NestJS", "Conhecimento em AWS"],
    default: [],
  })
  requirementsNice?: string[];

  @ApiPropertyOptional({
    description: "Benefícios oferecidos",
    type: [String],
    example: ["Vale alimentação", "Plano de saúde"],
    default: [],
  })
  benefits?: string[];

  @ApiPropertyOptional({
    description: "Se a vaga está ativa",
    default: true,
    example: true,
  })
  isActive?: boolean;
}