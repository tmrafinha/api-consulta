import { z } from "zod";
import { EmploymentType, WorkModel } from "@prisma/client";

export const CreateJobSchema = z.object({
  companyId: z.string().uuid(),

  title: z.string().min(3, "Título muito curto"),
  slug: z
    .string()
    .min(3)
    .regex(
      /^[a-z0-9-]+$/,
      "Slug deve conter apenas letras minúsculas, números e hífens"
    ),

  description: z.string().min(10, "Descrição muito curta"),

  employmentType: z.nativeEnum(EmploymentType),
  workModel: z.nativeEnum(WorkModel),

  location: z.string().optional(),

  salaryMin: z.number().int().min(0).nullable().optional(),
  salaryMax: z.number().int().nullable().optional(),

  techStack: z.array(z.string()).default([]),
  responsibilities: z.array(z.string()).default([]),
  requirementsMust: z.array(z.string()).default([]),
  requirementsNice: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),

  isActive: z.boolean().default(true),
});

export type CreateJobDto = z.infer<typeof CreateJobSchema>;
