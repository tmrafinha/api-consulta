import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";

export class ResumeQuerySwaggerDto {
  @ApiPropertyOptional({
    description: "Buscar por nome/originalName",
    type: String,
  })
  search?: string;

  @ApiPropertyOptional({
    description: "Campo de ordenação",
    enum: ["uploadedAt", "originalName"],
    default: "uploadedAt",
  })
  sortBy: "uploadedAt" | "originalName" = "uploadedAt";

  @ApiPropertyOptional({
    description: "Ordem da listagem",
    enum: ["asc", "desc"],
    default: "desc",
  })
  sortOrder: "asc" | "desc" = "desc";

  @ApiPropertyOptional({ description: "Número da página", default: 1 })
  page?: number;

  @ApiPropertyOptional({ description: "Itens por página", default: 10 })
  limit?: number;
}