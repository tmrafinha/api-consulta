import { z } from "zod";
import { PaginationSchema } from "src/common/pagination/pagination-base.schema";
import { ApplicationStatus } from "@prisma/client";

export const ApplicationQuerySchema = PaginationSchema.extend({
  status: z.nativeEnum(ApplicationStatus).optional(),
  jobId: z.string().uuid().optional(),
  sortBy: z.enum(["appliedAt", "updatedAt"]).default("appliedAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type ApplicationQueryDto = z.infer<typeof ApplicationQuerySchema>;