"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationSchema = void 0;
const zod_1 = require("zod");
exports.PaginationSchema = zod_1.z.object({
    page: zod_1.z.string().optional().default("1").transform(Number),
    limit: zod_1.z.string().optional().default("10").transform(Number),
});
//# sourceMappingURL=pagination-base.schema.js.map