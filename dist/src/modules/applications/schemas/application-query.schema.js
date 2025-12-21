"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_base_schema_1 = require("../../../common/pagination/pagination-base.schema");
const client_1 = require("@prisma/client");
exports.ApplicationQuerySchema = pagination_base_schema_1.PaginationSchema.extend({
    status: zod_1.z.nativeEnum(client_1.ApplicationStatus).optional(),
    jobId: zod_1.z.string().uuid().optional(),
    sortBy: zod_1.z.enum(["appliedAt", "updatedAt"]).default("appliedAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).default("desc"),
});
//# sourceMappingURL=application-query.schema.js.map