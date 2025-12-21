import { ApiPropertyOptional } from "@nestjs/swagger";
import { EmploymentType, WorkModel } from "@prisma/client";

export class UpdateJobSwaggerDto {
  @ApiPropertyOptional({
    description: "Título da vaga",
    minLength: 3,
    example: "Desenvolvedor Full Stack Sênior",
  })
  title?: string;

  @ApiPropertyOptional({
    description:
      "Slug da vaga (somente letras minúsculas, números e hífens, ex: dev-fullstack-sr)",
    minLength: 3,
    pattern: "^[a-z0-9-]+$",
    example: "desenvolvedor-fullstack-senior",
  })
  slug?: string;

  @ApiPropertyOptional({
    description: "Descrição detalhada da vaga",
    minLength: 10,
    example: "Vaga para dev sênior com foco em arquitetura de microserviços...",
  })
  description?: string;

  @ApiPropertyOptional({
    description: "Tipo de contratação",
    enum: EmploymentType,
    enumName: "EmploymentType",
    example: EmploymentType.PJ,
  })
  employmentType?: EmploymentType;

  @ApiPropertyOptional({
    description: "Modelo de trabalho",
    enum: WorkModel,
    enumName: "WorkModel",
    example: WorkModel.REMOTE,
  })
  workModel?: WorkModel;

  @ApiPropertyOptional({
    description: "Localização (cidade / estado ou 'Remoto')",
    example: "São Paulo - SP",
  })
  location?: string;

  @ApiPropertyOptional({
    description: "Salário mínimo",
    minimum: 0,
    type: Number,
    example: 8000,
  })
  salaryMin?: number;

  @ApiPropertyOptional({
    description: "Salário máximo",
    type: Number,
    example: 12000,
  })
  salaryMax?: number;

  @ApiPropertyOptional({
    description: "Stack de tecnologias",
    type: [String],
    example: ["Node.js", "NestJS", "PostgreSQL"],
  })
  techStack?: string[];

  @ApiPropertyOptional({
    description: "Responsabilidades principais",
    type: [String],
    example: ["Liderar time técnico", "Definir arquitetura"],
  })
  responsibilities?: string[];

  @ApiPropertyOptional({
    description: "Requisitos obrigatórios",
    type: [String],
    example: ["5+ anos com Node.js", "Experiência com arquitetura em nuvem"],
  })
  requirementsMust?: string[];

  @ApiPropertyOptional({
    description: "Requisitos desejáveis",
    type: [String],
    example: ["Experiência com Kafka", "Inglês avançado"],
  })
  requirementsNice?: string[];

  @ApiPropertyOptional({
    description: "Benefícios oferecidos",
    type: [String],
    example: ["PLR", "Auxílio home-office"],
  })
  benefits?: string[];

  @ApiPropertyOptional({
    description: "Se a vaga está ativa",
    example: false,
  })
  isActive?: boolean;
}