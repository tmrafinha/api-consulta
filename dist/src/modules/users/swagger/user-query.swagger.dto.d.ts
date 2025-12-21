import { UserRole } from "@prisma/client";
export declare class UserQuerySwaggerDto {
    page?: number;
    limit?: number;
    search?: string;
    role?: UserRole;
    companyId?: string;
    sortBy?: "createdAt" | "name" | "email";
    sortOrder?: "asc" | "desc";
}
