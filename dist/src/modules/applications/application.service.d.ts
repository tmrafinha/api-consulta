import { ApplicationRepository } from './application.repository';
import { CreateApplicationDto } from './schemas/create-application.schema';
import { ApplicationQueryDto } from './schemas/application-query.schema';
import { JwtPayload } from '../auth/strategies/jwt.dto';
export declare class ApplicationService {
    private repo;
    constructor(repo: ApplicationRepository);
    apply(dto: CreateApplicationDto, user: JwtPayload): Promise<{
        job: {
            company: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                description: string | null;
                size: import(".prisma/client").$Enums.CompanySize | null;
                website: string | null;
                industry: string | null;
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
            userId: string;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
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
        jobId: string;
        resumeId: string;
        coverLetter: string | null;
        candidateId: string;
        appliedAt: Date;
    }>;
    findAll(query: ApplicationQueryDto, user: JwtPayload): Promise<{
        items: ({
            job: {
                company: {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    deletedAt: Date | null;
                    description: string | null;
                    size: import(".prisma/client").$Enums.CompanySize | null;
                    website: string | null;
                    industry: string | null;
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
                userId: string;
                filename: string;
                originalName: string;
                mimeType: string;
                size: number;
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
            jobId: string;
            resumeId: string;
            coverLetter: string | null;
            candidateId: string;
            appliedAt: Date;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
