import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./schemas/create-company.schema";
import { UpdateCompanyDto } from "./schemas/update-company.schema";
import { CompanyQueryDto } from "./schemas/company-query.schema";
export declare class CompanyController {
    private service;
    constructor(service: CompanyService);
    create(dto: CreateCompanyDto): Promise<{
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
    }>;
    update(id: string, dto: UpdateCompanyDto): Promise<{
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
    }>;
    get(id: string): Promise<{
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
    }>;
    getAll(query: CompanyQueryDto): Promise<{
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
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    delete(id: string): Promise<{
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
    }>;
    uploadLogo(id: string, file: Express.Multer.File): Promise<{
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
    } | undefined>;
    getLogo(id: string): Promise<{
        url: string;
    }>;
    removeLogo(id: string): Promise<{
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
    }>;
}
