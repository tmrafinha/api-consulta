import { z } from "zod";
import { CompanySize } from "@prisma/client";

export const CreateCompanySchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  website: z.string().url().optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  size: z.nativeEnum(CompanySize).optional(),
});

export type CreateCompanyDto = z.infer<typeof CreateCompanySchema>;
