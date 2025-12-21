import { z } from "zod";
import { PaginationSchema } from "src/common/pagination/pagination-base.schema";
import { EmploymentType, WorkModel } from "@prisma/client";

export const JobQuerySchema = PaginationSchema.extend({
  search: z.string().optional(),
  companyId: z.string().uuid(),
  employmentType: z.nativeEnum(EmploymentType).optional(),
  workModel: z.nativeEnum(WorkModel).optional(),
  location: z.string().optional(),

  minSalary: z.coerce.number().optional(),
  maxSalary: z.coerce.number().optional(),

  sortBy: z
    .enum(["createdAt", "salaryMin", "salaryMax", "applicationsCount"])
    .default("createdAt"),

  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type JobQueryDto = z.infer<typeof JobQuerySchema>;
