"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_base_schema_1 = require("../../../common/pagination/pagination-base.schema");
exports.ResumeQuerySchema = pagination_base_schema_1.PaginationSchema.extend({
    search: zod_1.z.string().optional(),
    sortBy: zod_1.z.enum(["uploadedAt", "originalName"]).default("uploadedAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).default("desc"),
});
//# sourceMappingURL=resume-query.schema.js.map