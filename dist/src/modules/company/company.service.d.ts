import { CompanyRepository } from "./company.repository";
import { CreateCompanyDto } from "./schemas/create-company.schema";
import { UpdateCompanyDto } from "./schemas/update-company.schema";
import { CompanyQueryDto } from "./schemas/company-query.schema";
import { S3StorageService } from "src/shared/storage/s3-storage.service";
export declare class CompanyService {
    private readonly repo;
    private readonly storage;
    constructor(repo: CompanyRepository, storage: S3StorageService);
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
    findById(id: string): Promise<{
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
    findAll(query: CompanyQueryDto): Promise<{
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
    getLogoUrl(id: string): Promise<{
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
