import { z } from "zod";
import { PaginationSchema } from "src/common/pagination/pagination-base.schema";

export const ResumeQuerySchema = PaginationSchema.extend({
  search: z.string().optional(),
  sortBy: z.enum(["uploadedAt", "originalName"]).default("uploadedAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type ResumeQueryDto = z.infer<typeof ResumeQuerySchema>;