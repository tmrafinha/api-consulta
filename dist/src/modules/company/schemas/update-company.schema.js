"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompanySchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
exports.UpdateCompanySchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    website: zod_1.z.string().url().optional(),
    description: zod_1.z.string().optional(),
    industry: zod_1.z.string().optional(),
    size: zod_1.z.nativeEnum(client_1.CompanySize).optional(),
});
//# sourceMappingURL=update-company.schema.js.map