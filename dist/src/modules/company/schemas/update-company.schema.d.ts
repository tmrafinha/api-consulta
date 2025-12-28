import { z } from "zod";
export declare const UpdateCompanySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    industry: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNativeEnum<{
        SMALL: "SMALL";
        MEDIUM: "MEDIUM";
        LARGE: "LARGE";
        ENTERPRISE: "ENTERPRISE";
    }>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    size?: "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE" | undefined;
    website?: string | undefined;
    industry?: string | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    size?: "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE" | undefined;
    website?: string | undefined;
    industry?: string | undefined;
}>;
export type UpdateCompanyDto = z.infer<typeof UpdateCompanySchema>;
