import { z } from "zod";

export const CreateApplicationSchema = z.object({
  jobId: z.string().uuid(),
  resumeId: z.string().cuid(),
  coverLetter: z.string().optional(),
});

export type CreateApplicationDto = z.infer<typeof CreateApplicationSchema>;