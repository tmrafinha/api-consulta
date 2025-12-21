import { ApplicationStatus } from "@prisma/client";
export declare class ApplicationQuerySwaggerDto {
    page?: number;
    limit?: number;
    status?: ApplicationStatus;
    jobId?: string;
    sortBy?: "appliedAt" | "updatedAt";
    sortOrder?: "asc" | "desc";
}
