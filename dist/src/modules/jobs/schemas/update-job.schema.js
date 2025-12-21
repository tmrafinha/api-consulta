"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
exports.UpdateJobSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).optional(),
    slug: zod_1.z
        .string()
        .min(3)
        .regex(/^[a-z0-9-]+$/, "Slug inválido")
        .optional(),
    description: zod_1.z.string().min(10).optional(),
    employmentType: zod_1.z.nativeEnum(client_1.EmploymentType).optional(),
    workModel: zod_1.z.nativeEnum(client_1.WorkModel).optional(),
    location: zod_1.z.string().optional(),
    salaryMin: zod_1.z.number().int().min(0).optional(),
    salaryMax: zod_1.z.number().int().optional(),
    techStack: zod_1.z.array(zod_1.z.string()).optional(),
    responsibilities: zod_1.z.array(zod_1.z.string()).optional(),
    requirementsMust: zod_1.z.array(zod_1.z.string()).optional(),
    requirementsNice: zod_1.z.array(zod_1.z.string()).optional(),
    benefits: zod_1.z.array(zod_1.z.string()).optional(),
    isActive: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=update-job.schema.js.map