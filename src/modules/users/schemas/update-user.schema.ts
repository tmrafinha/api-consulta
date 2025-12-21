import { z } from "zod";

export const UpdateUserSchema = z.object({
  name: z.string().min(2, "Nome muito curto").optional(),
  password: z
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres.")
    .optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;