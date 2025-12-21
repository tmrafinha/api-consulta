import { z } from "zod";
import { EmploymentType, WorkModel } from "@prisma/client";

export const UpdateJobSchema = z.object({
  title: z.string().min(3).optional(),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/, "Slug inválido")
    .optional(),

  description: z.string().min(10).optional(),

  employmentType: z.nativeEnum(EmploymentType).optional(),
  workModel: z.nativeEnum(WorkModel).optional(),

  location: z.string().optional(),

  salaryMin: z.number().int().min(0).optional(),
  salaryMax: z.number().int().optional(),

  techStack: z.array(z.string()).optional(),
  responsibilities: z.array(z.string()).optional(),
  requirementsMust: z.array(z.string()).optional(),
  requirementsNice: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),

  isActive: z.boolean().optional(),
});

export type UpdateJobDto = z.infer<typeof UpdateJobSchema>;
