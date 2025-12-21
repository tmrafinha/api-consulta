import { z } from "zod";
export declare const ResumeQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
}, {
    search: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<["uploadedAt", "originalName"]>>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}>, "strip", z.ZodTypeAny, {
    sortBy: "originalName" | "uploadedAt";
    sortOrder: "asc" | "desc";
    page: number;
    limit: number;
    search?: string | undefined;
}, {
    search?: string | undefined;
    sortBy?: "originalName" | "uploadedAt" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    page?: string | undefined;
    limit?: string | undefined;
}>;
export type ResumeQueryDto = z.infer<typeof ResumeQuerySchema>;
