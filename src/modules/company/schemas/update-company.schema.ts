import { z } from "zod";
import { CompanySize } from "@prisma/client";

export const UpdateCompanySchema = z.object({
  name: z.string().min(2).optional(),
  website: z.string().url().optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  size: z.nativeEnum(CompanySize).optional(),
});

export type UpdateCompanyDto = z.infer<typeof UpdateCompanySchema>;
