"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = void 0;
const zod_1 = require("zod");
exports.UpdateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Nome muito curto").optional(),
    password: zod_1.z
        .string()
        .min(6, "Senha deve ter pelo menos 6 caracteres.")
        .optional(),
});
//# sourceMappingURL=update-user.schema.js.map