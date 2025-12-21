"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    email: zod_1.z.string().email("E-mail inválido"),
    name: zod_1.z.string().min(2, "Nome muito curto"),
    password: zod_1.z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});
//# sourceMappingURL=create-user.schema.js.map