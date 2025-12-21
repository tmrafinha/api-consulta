import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email("E-mail inválido"),
  name: z.string().min(2, "Nome muito curto"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;