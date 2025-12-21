import { z } from "zod";
export declare const ApplicationQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
}, {
    status: z.ZodOptional<z.ZodNativeEnum<{
        PENDING: "PENDING";
        UNDER_REVIEW: "UNDER_REVIEW";
        INTERVIEW: "INTERVIEW";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
        WITHDRAWN: "WITHDRAWN";
    }>>;
    jobId: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<["appliedAt", "updatedAt"]>>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}>, "strip", z.ZodTypeAny, {
    sortBy: "updatedAt" | "appliedAt";
    sortOrder: "asc" | "desc";
    page: number;
    limit: number;
    status?: "PENDING" | "UNDER_REVIEW" | "INTERVIEW" | "APPROVED" | "REJECTED" | "WITHDRAWN" | undefined;
    jobId?: string | undefined;
}, {
    sortBy?: "updatedAt" | "appliedAt" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    status?: "PENDING" | "UNDER_REVIEW" | "INTERVIEW" | "APPROVED" | "REJECTED" | "WITHDRAWN" | undefined;
    page?: string | undefined;
    limit?: string | undefined;
    jobId?: string | undefined;
}>;
export type ApplicationQueryDto = z.infer<typeof ApplicationQuerySchema>;
