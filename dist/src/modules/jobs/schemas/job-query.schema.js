"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_base_schema_1 = require("../../../common/pagination/pagination-base.schema");
const client_1 = require("@prisma/client");
exports.JobQuerySchema = pagination_base_schema_1.PaginationSchema.extend({
    search: zod_1.z.string().optional(),
    companyId: zod_1.z.string().uuid().optional(),
    employmentType: zod_1.z.nativeEnum(client_1.EmploymentType).optional(),
    workModel: zod_1.z.nativeEnum(client_1.WorkModel).optional(),
    location: zod_1.z.string().optional(),
    minSalary: zod_1.z.coerce.number().optional(),
    maxSalary: zod_1.z.coerce.number().optional(),
    sortBy: zod_1.z
        .enum(["createdAt", "salaryMin", "salaryMax", "applicationsCount"])
        .default("createdAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).default("desc"),
});
//# sourceMappingURL=job-query.schema.js.map