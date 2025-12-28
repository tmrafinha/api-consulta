import { z } from "zod";
export declare const JobQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
}, {
    search: z.ZodOptional<z.ZodString>;
    companyId: z.ZodOptional<z.ZodString>;
    employmentType: z.ZodOptional<z.ZodNativeEnum<{
        CLT: "CLT";
        PJ: "PJ";
        FREELANCE: "FREELANCE";
        INTERNSHIP: "INTERNSHIP";
    }>>;
    workModel: z.ZodOptional<z.ZodNativeEnum<{
        REMOTE: "REMOTE";
        HYBRID: "HYBRID";
        ON_SITE: "ON_SITE";
    }>>;
    location: z.ZodOptional<z.ZodString>;
    minSalary: z.ZodOptional<z.ZodNumber>;
    maxSalary: z.ZodOptional<z.ZodNumber>;
    sortBy: z.ZodDefault<z.ZodEnum<["createdAt", "salaryMin", "salaryMax", "applicationsCount"]>>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}>, "strip", z.ZodTypeAny, {
    sortBy: "createdAt" | "salaryMin" | "salaryMax" | "applicationsCount";
    sortOrder: "asc" | "desc";
    page: number;
    limit: number;
    companyId?: string | undefined;
    search?: string | undefined;
    employmentType?: "CLT" | "PJ" | "FREELANCE" | "INTERNSHIP" | undefined;
    workModel?: "REMOTE" | "HYBRID" | "ON_SITE" | undefined;
    location?: string | undefined;
    minSalary?: number | undefined;
    maxSalary?: number | undefined;
}, {
    companyId?: string | undefined;
    search?: string | undefined;
    sortBy?: "createdAt" | "salaryMin" | "salaryMax" | "applicationsCount" | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    page?: string | undefined;
    limit?: string | undefined;
    employmentType?: "CLT" | "PJ" | "FREELANCE" | "INTERNSHIP" | undefined;
    workModel?: "REMOTE" | "HYBRID" | "ON_SITE" | undefined;
    location?: string | undefined;
    minSalary?: number | undefined;
    maxSalary?: number | undefined;
}>;
export type JobQueryDto = z.infer<typeof JobQuerySchema>;
