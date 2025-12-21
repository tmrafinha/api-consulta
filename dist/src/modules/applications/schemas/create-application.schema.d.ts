import { z } from "zod";
export declare const CreateApplicationSchema: z.ZodObject<{
    jobId: z.ZodString;
    resumeId: z.ZodString;
    coverLetter: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jobId: string;
    resumeId: string;
    coverLetter?: string | undefined;
}, {
    jobId: string;
    resumeId: string;
    coverLetter?: string | undefined;
}>;
export type CreateApplicationDto = z.infer<typeof CreateApplicationSchema>;
