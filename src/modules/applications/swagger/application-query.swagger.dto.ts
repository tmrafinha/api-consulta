import { ApiPropertyOptional } from "@nestjs/swagger";
import { ApplicationStatus } from "@prisma/client";

export class ApplicationQuerySwaggerDto {
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
    description: "Filtrar por status da candidatura",
    enum: ApplicationStatus,
    example: ApplicationStatus.PENDING,
  })
  status?: ApplicationStatus;

  @ApiPropertyOptional({
    description: "Filtrar candidaturas por ID da vaga",
    format: "uuid",
    example: "cmiy0g0q40000xw0dgb9w8a1z",
  })
  jobId?: string;

  @ApiPropertyOptional({
    description: "Campo usado para ordenação",
    enum: ["appliedAt", "updatedAt"],
    example: "appliedAt",
    default: "appliedAt",
  })
  sortBy?: "appliedAt" | "updatedAt";

  @ApiPropertyOptional({
    description: "Ordem da ordenação",
    enum: ["asc", "desc"],
    example: "desc",
    default: "desc",
  })
  sortOrder?: "asc" | "desc";
}