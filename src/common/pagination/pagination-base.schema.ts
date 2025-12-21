import { z } from "zod";

export const PaginationSchema = z.object({
  page: z.string().optional().default("1").transform(Number),
  limit: z.string().optional().default("10").transform(Number),
});

export type PaginationDto = z.infer<typeof PaginationSchema>;
