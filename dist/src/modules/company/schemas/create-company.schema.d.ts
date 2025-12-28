import { z } from "zod";
export declare const CreateCompanySchema: z.ZodObject<{
    name: z.ZodString;
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
    name: string;
    description?: string | undefined;
    size?: "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE" | undefined;
    website?: string | undefined;
    industry?: string | undefined;
}, {
    name: string;
    description?: string | undefined;
    size?: "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE" | undefined;
    website?: string | undefined;
    industry?: string | undefined;
}>;
export type CreateCompanyDto = z.infer<typeof CreateCompanySchema>;
