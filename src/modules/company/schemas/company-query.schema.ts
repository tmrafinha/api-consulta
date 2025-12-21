import { PaginationSchema } from "src/common/pagination/pagination-base.schema";
import { z } from "zod";

export const CompanyQuerySchema = PaginationSchema.extend({
  size: z.string().optional(),
  industry: z.string().optional(),
  search: z.string().optional(),
  sortBy: z.string().optional().default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export type CompanyQueryDto = z.infer<typeof CompanyQuerySchema>;
