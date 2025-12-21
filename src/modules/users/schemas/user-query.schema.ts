import { z } from "zod";
import { PaginationSchema } from "src/common/pagination/pagination-base.schema";
import { UserRole } from "@prisma/client";

export const UserQuerySchema = PaginationSchema.extend({
  search: z.string().optional(),
  role: z.nativeEnum(UserRole).optional(),
  companyId: z.string().uuid().optional(),

  sortBy: z
    .enum(["createdAt", "name", "email"])
    .default("createdAt"),

  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type UserQueryDto = z.infer<typeof UserQuerySchema>;