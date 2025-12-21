// src/modules/users/swagger/user-query.swagger.dto.ts
import { ApiPropertyOptional } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";

export class UserQuerySwaggerDto {
  @ApiPropertyOptional({
    example: 1,
    description: "Número da página",
    default: 1,
  })
  page?: number;

  @ApiPropertyOptional({
    example: 10,
    description: "Quantidade de registros por página",
    default: 10,
  })
  limit?: number;

  @ApiPropertyOptional({
    example: "john",
    description: "Busca por nome ou e-mail",
  })
  search?: string;

  @ApiPropertyOptional({
    enum: UserRole,
    description: "Filtrar por papel do usuário",
  })
  role?: UserRole;

  @ApiPropertyOptional({
    example: "cmiut1iiz0000n10cfzrg54yw",
    description: "Filtrar por companyId (UUID)",
  })
  companyId?: string;

  @ApiPropertyOptional({
    enum: ["createdAt", "name", "email"],
    default: "createdAt",
    description: "Campo para ordenação",
  })
  sortBy?: "createdAt" | "name" | "email";

  @ApiPropertyOptional({
    enum: ["asc", "desc"],
    default: "desc",
    description: "Ordem da ordenação",
  })
  sortOrder?: "asc" | "desc";
}