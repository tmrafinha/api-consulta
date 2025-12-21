import { z } from "zod";
export declare const UserQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
}, {
    search: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodNativeEnum<{
        CANDIDATE: "CANDIDATE";
        RECRUITER: "RECRUITER";
        COMPANY_ADMIN: "COMPANY_ADMIN";
        ADMIN: "ADMIN";
    }>>;
    companyId: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<["createdAt", "name", "email"]>>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}>, "strip", z.ZodTypeAny, {
    sortBy: "name" | "email" | "createdAt";
    sortOrder: "asc" | "desc";
    page: number;
    limit: number;
    role?: "CANDIDATE" | "RECRUITER" | "COMPANY_ADMIN" | "ADMIN" | undefined;
    companyId?: string | undefined;
    search?: string | undefined;
}, {
    role?: "CANDIDATE" | "RECRUITER" | "COMPANY_ADMIN" | "ADMIN" | undefined;
    companyId?: string | undefined;
    search?: string | undefined;
    sortBy?: "name" | "email" | "createdAt" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    page?: string | undefined;
    limit?: string | undefined;
}>;
export type UserQueryDto = z.infer<typeof UserQuerySchema>;
