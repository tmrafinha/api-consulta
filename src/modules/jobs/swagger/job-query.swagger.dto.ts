import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";
import { EmploymentType, WorkModel } from "@prisma/client";

export enum JobSortBy {
  CREATED_AT = "createdAt",
  SALARY_MIN = "salaryMin",
  SALARY_MAX = "salaryMax",
  APPLICATIONS_COUNT = "applicationsCount",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export class JobQuerySwaggerDto {
  @ApiPropertyOptional({
    description: "Número da página (paginaçao)",
    default: 1,
    minimum: 1,
    example: 1,
  })
  page?: number;

  @ApiPropertyOptional({
    description: "Quantidade de itens por página",
    default: 10,
    minimum: 1,
    example: 10,
  })
  limit?: number;

  @ApiPropertyOptional({
    description: "Texto para busca em título/descrição/etc",
    example: "full stack",
  })
  search?: string;

  @ApiProperty({
    description: "ID da empresa para filtrar vagas",
    format: "uuid",
    example: "cmiut1iiz0000n10cfzrg54yw",
  })
  companyId: string;

  @ApiPropertyOptional({
    description: "Filtrar por tipo de contratação",
    enum: EmploymentType,
    enumName: "EmploymentType",
    example: EmploymentType.CLT,
  })
  employmentType?: EmploymentType;

  @ApiPropertyOptional({
    description: "Filtrar por modelo de trabalho",
    enum: WorkModel,
    enumName: "WorkModel",
    example: WorkModel.REMOTE,
  })
  workModel?: WorkModel;

  @ApiPropertyOptional({
    description: "Filtrar por localização",
    example: "Itajaí - SC",
  })
  location?: string;

  @ApiPropertyOptional({
    description: "Filtrar por salário mínimo",
    type: Number,
    example: 5000,
  })
  minSalary?: number;

  @ApiPropertyOptional({
    description: "Filtrar por salário máximo",
    type: Number,
    example: 12000,
  })
  maxSalary?: number;

  @ApiPropertyOptional({
    description: "Campo para ordenação",
    enum: JobSortBy,
    enumName: "JobSortBy",
    default: JobSortBy.CREATED_AT,
    example: JobSortBy.CREATED_AT,
  })
  sortBy?: JobSortBy;

  @ApiPropertyOptional({
    description: "Direção da ordenação",
    enum: SortOrder,
    enumName: "SortOrder",
    default: SortOrder.DESC,
    example: SortOrder.DESC,
  })
  sortOrder?: SortOrder;
}