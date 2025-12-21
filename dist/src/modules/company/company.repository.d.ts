import { PrismaService } from "src/config/prisma/prisma.service";
import { Prisma, Company } from "@prisma/client";
export declare class CompanyRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.CompanyCreateInput): Promise<Company>;
    update(id: string, data: Prisma.CompanyUpdateInput): Promise<Company>;
    findById(id: string): Promise<Company | null>;
    findByName(name: string): Promise<Company | null>;
    findAll(params: {
        pagination: {
            skip: number;
            take: number;
        };
        filters: any;
        sortBy: string;
        sortOrder: "asc" | "desc";
    }): Promise<{
        items: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            description: string | null;
            website: string | null;
            industry: string | null;
            size: import(".prisma/client").$Enums.CompanySize | null;
            logoUrl: string | null;
        }[];
        total: number;
    }>;
    delete(id: string): Promise<Company>;
}
