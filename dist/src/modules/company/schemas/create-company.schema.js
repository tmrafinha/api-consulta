"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanySchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
exports.CreateCompanySchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Nome muito curto"),
    website: zod_1.z.string().url().optional(),
    description: zod_1.z.string().optional(),
    industry: zod_1.z.string().optional(),
    size: zod_1.z.nativeEnum(client_1.CompanySize).optional(),
});
//# sourceMappingURL=create-company.schema.js.map