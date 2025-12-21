import { z } from "zod";
export declare const UpdateJobSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
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
    salaryMin: z.ZodOptional<z.ZodNumber>;
    salaryMax: z.ZodOptional<z.ZodNumber>;
    techStack: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    responsibilities: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    requirementsMust: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    requirementsNice: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    title?: string | undefined;
    slug?: string | undefined;
    employmentType?: "CLT" | "PJ" | "FREELANCE" | "INTERNSHIP" | undefined;
    workModel?: "REMOTE" | "HYBRID" | "ON_SITE" | undefined;
    location?: string | undefined;
    salaryMin?: number | undefined;
    salaryMax?: number | undefined;
    techStack?: string[] | undefined;
    responsibilities?: string[] | undefined;
    requirementsMust?: string[] | undefined;
    requirementsNice?: string[] | undefined;
    benefits?: string[] | undefined;
    isActive?: boolean | undefined;
}, {
    description?: string | undefined;
    title?: string | undefined;
    slug?: string | undefined;
    employmentType?: "CLT" | "PJ" | "FREELANCE" | "INTERNSHIP" | undefined;
    workModel?: "REMOTE" | "HYBRID" | "ON_SITE" | undefined;
    location?: string | undefined;
    salaryMin?: number | undefined;
    salaryMax?: number | undefined;
    techStack?: string[] | undefined;
    responsibilities?: string[] | undefined;
    requirementsMust?: string[] | undefined;
    requirementsNice?: string[] | undefined;
    benefits?: string[] | undefined;
    isActive?: boolean | undefined;
}>;
export type UpdateJobDto = z.infer<typeof UpdateJobSchema>;
