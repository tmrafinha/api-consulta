"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = void 0;
const zod_1 = require("zod");
exports.RegisterSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().min(2),
});
//# sourceMappingURL=register.dto.js.map