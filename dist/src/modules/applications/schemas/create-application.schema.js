"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApplicationSchema = void 0;
const zod_1 = require("zod");
exports.CreateApplicationSchema = zod_1.z.object({
    jobId: zod_1.z.string().uuid(),
    resumeId: zod_1.z.string().cuid(),
    coverLetter: zod_1.z.string().optional(),
});
//# sourceMappingURL=create-application.schema.js.map