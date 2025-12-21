"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyQuerySchema = void 0;
const pagination_base_schema_1 = require("../../../common/pagination/pagination-base.schema");
const zod_1 = require("zod");
exports.CompanyQuerySchema = pagination_base_schema_1.PaginationSchema.extend({
    size: zod_1.z.string().optional(),
    industry: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    sortBy: zod_1.z.string().optional().default("createdAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).optional().default("desc"),
});
//# sourceMappingURL=company-query.schema.js.map