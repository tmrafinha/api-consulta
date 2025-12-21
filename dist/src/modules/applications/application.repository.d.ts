import { PrismaService } from 'src/config/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateApplicationDto } from './schemas/create-application.schema';
type ApplicationWithRelations = Prisma.ApplicationGetPayload<{
    include: {
        job: {
            include: {
                company: true;
            };
        };
        candidate: true;
        resume: true;
    };
}>;
export declare class ApplicationRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateApplicationDto, candidateId: string): Promise<ApplicationWithRelations>;
    findByCandidateAndJob(candidateId: string, jobId: string): Promise<({
        job: {
            company: {
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
            };
        } & {
            id: string;
            companyId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            description: string;
            title: string;
            slug: string;
            employmentType: import(".prisma/client").$Enums.EmploymentType;
            workModel: import(".prisma/client").$Enums.WorkModel;
            location: string | null;
            salaryMin: number | null;
            salaryMax: number | null;
            techStack: string[];
            responsibilities: string[];
            requirementsMust: string[];
            requirementsNice: string[];
            benefits: string[];
            viewsCount: number;
            applicationsCount: number;
            isActive: boolean;
            publishedAt: Date;
        };
        resume: {
            id: string;
            deletedAt: Date | null;
            size: number;
            userId: string;
            filename: string;
            originalName: string;
            mimeType: string;
            storageUrl: string;
            uploadedAt: Date;
        };
        candidate: {
            name: string;
            id: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            companyId: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        updatedAt: Date;
        deletedAt: Date | null;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        candidateId: string;
        jobId: string;
        resumeId: string;
        coverLetter: string | null;
        appliedAt: Date;
    }) | null>;
    findById(id: string): Promise<({
        job: {
            company: {
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
            };
        } & {
            id: string;
            companyId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            description: string;
            title: string;
            slug: string;
            employmentType: import(".prisma/client").$Enums.EmploymentType;
            workModel: import(".prisma/client").$Enums.WorkModel;
            location: string | null;
            salaryMin: number | null;
            salaryMax: number | null;
            techStack: string[];
            responsibilities: string[];
            requirementsMust: string[];
            requirementsNice: string[];
            benefits: string[];
            viewsCount: number;
            applicationsCount: number;
            isActive: boolean;
            publishedAt: Date;
        };
        resume: {
            id: string;
            deletedAt: Date | null;
            size: number;
            userId: string;
            filename: string;
            originalName: string;
            mimeType: string;
            storageUrl: string;
            uploadedAt: Date;
        };
        candidate: {
            name: string;
            id: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            companyId: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
    } & {
        id: string;
        updatedAt: Date;
        deletedAt: Date | null;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        candidateId: string;
        jobId: string;
        resumeId: string;
        coverLetter: string | null;
        appliedAt: Date;
    }) | null>;
    findAll(params: {
        pagination: {
            skip: number;
            take: number;
        };
        filters: Prisma.ApplicationWhereInput;
        sortBy: string;
        sortOrder: 'asc' | 'desc';
    }): Promise<{
        items: ({
            job: {
                company: {
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
                };
            } & {
                id: string;
                companyId: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                description: string;
                title: string;
                slug: string;
                employmentType: import(".prisma/client").$Enums.EmploymentType;
                workModel: import(".prisma/client").$Enums.WorkModel;
                location: string | null;
                salaryMin: number | null;
                salaryMax: number | null;
                techStack: string[];
                responsibilities: string[];
                requirementsMust: string[];
                requirementsNice: string[];
                benefits: string[];
                viewsCount: number;
                applicationsCount: number;
                isActive: boolean;
                publishedAt: Date;
            };
            resume: {
                id: string;
                deletedAt: Date | null;
                size: number;
                userId: string;
                filename: string;
                originalName: string;
                mimeType: string;
                storageUrl: string;
                uploadedAt: Date;
            };
            candidate: {
                name: string;
                id: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                companyId: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import(".prisma/client").$Enums.ApplicationStatus;
            candidateId: string;
            jobId: string;
            resumeId: string;
            coverLetter: string | null;
            appliedAt: Date;
        })[];
        total: number;
    }>;
}
export {};
