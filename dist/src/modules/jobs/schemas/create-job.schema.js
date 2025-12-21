"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJobSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
exports.CreateJobSchema = zod_1.z.object({
    companyId: zod_1.z.string().uuid(),
    title: zod_1.z.string().min(3, "Título muito curto"),
    slug: zod_1.z
        .string()
        .min(3)
        .regex(/^[a-z0-9-]+$/, "Slug deve conter apenas letras minúsculas, números e hífens"),
    description: zod_1.z.string().min(10, "Descrição muito curta"),
    employmentType: zod_1.z.nativeEnum(client_1.EmploymentType),
    workModel: zod_1.z.nativeEnum(client_1.WorkModel),
    location: zod_1.z.string().optional(),
    salaryMin: zod_1.z.number().int().min(0).nullable().optional(),
    salaryMax: zod_1.z.number().int().nullable().optional(),
    techStack: zod_1.z.array(zod_1.z.string()).default([]),
    responsibilities: zod_1.z.array(zod_1.z.string()).default([]),
    requirementsMust: zod_1.z.array(zod_1.z.string()).default([]),
    requirementsNice: zod_1.z.array(zod_1.z.string()).default([]),
    benefits: zod_1.z.array(zod_1.z.string()).default([]),
    isActive: zod_1.z.boolean().default(true),
});
//# sourceMappingURL=create-job.schema.js.map