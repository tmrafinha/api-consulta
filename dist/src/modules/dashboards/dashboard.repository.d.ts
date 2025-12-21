import { PrismaService } from 'src/config/prisma/prisma.service';
import { ApplicationStatus } from '@prisma/client';
type StatusCounts = {
    total: number;
    counts: Record<ApplicationStatus, number>;
};
export declare class DashboardRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getStatusCountsForCandidate(candidateId: string): Promise<StatusCounts>;
    getLastApplicationsForCandidate(candidateId: string, limit?: number): Promise<({
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
    })[]>;
    getApplicationsForCandidateInYear(candidateId: string, year: number): Promise<{
        status: import(".prisma/client").$Enums.ApplicationStatus;
        appliedAt: Date;
    }[]>;
}
export {};
