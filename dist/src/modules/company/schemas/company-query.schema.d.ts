import { z } from "zod";
export declare const CompanyQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string | undefined>;
}, {
    size: z.ZodOptional<z.ZodString>;
    industry: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    sortOrder: z.ZodDefault<z.ZodOptional<z.ZodEnum<["asc", "desc"]>>>;
}>, "strip", z.ZodTypeAny, {
    sortBy: string;
    sortOrder: "asc" | "desc";
    page: number;
    limit: number;
    search?: string | undefined;
    industry?: string | undefined;
    size?: string | undefined;
}, {
    search?: string | undefined;
    sortBy?: string | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    page?: string | undefined;
    limit?: string | undefined;
    industry?: string | undefined;
    size?: string | undefined;
}>;
export type CompanyQueryDto = z.infer<typeof CompanyQuerySchema>;
