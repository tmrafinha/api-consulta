import { ApiPropertyOptional } from "@nestjs/swagger";

export class CompanyQuerySwaggerDto {
  @ApiPropertyOptional({
    description: "Página atual (paginação)",
    example: 1,
    default: 1,
  })
  page?: number;

  @ApiPropertyOptional({
    description: "Quantidade de itens por página",
    example: 10,
    default: 10,
  })
  limit?: number;

  @ApiPropertyOptional({
    description: "Filtrar por porte da empresa (ex.: SMALL, MEDIUM, LARGE)",
    example: "MEDIUM",
  })
  size?: string;

  @ApiPropertyOptional({
    description: "Filtrar por indústria / setor",
    example: "Tecnologia",
  })
  industry?: string;

  @ApiPropertyOptional({
    description: "Busca textual por nome / descrição",
    example: "consultoria",
  })
  search?: string;

  @ApiPropertyOptional({
    description: "Campo utilizado para ordenação",
    example: "createdAt",
    default: "createdAt",
  })
  sortBy?: string;

  @ApiPropertyOptional({
    description: "Ordem da ordenação",
    enum: ["asc", "desc"],
    example: "desc",
    default: "desc",
  })
  sortOrder?: "asc" | "desc";
}