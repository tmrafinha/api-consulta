"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_base_schema_1 = require("../../../common/pagination/pagination-base.schema");
const client_1 = require("@prisma/client");
exports.UserQuerySchema = pagination_base_schema_1.PaginationSchema.extend({
    search: zod_1.z.string().optional(),
    role: zod_1.z.nativeEnum(client_1.UserRole).optional(),
    companyId: zod_1.z.string().uuid().optional(),
    sortBy: zod_1.z
        .enum(["createdAt", "name", "email"])
        .default("createdAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).default("desc"),
});
//# sourceMappingURL=user-query.schema.js.map