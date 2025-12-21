import { ApplicationStatus, EmploymentType, WorkModel } from '@prisma/client';
import { DashboardRepository } from './dashboard.repository';
import { JwtPayload } from '../auth/strategies/jwt.dto';
type ApplicationsOverviewResponse = {
    kpis: {
        totalActive: number;
        underReview: number;
        interviews: number;
        newMessages: number;
    };
    monthlyApplications: {
        month: number;
        total: number;
    }[];
    lastApplications: {
        id: string;
        jobTitle: string;
        companyName: string | null;
        companyLogoUrl: string | null;
        location: string | null;
        employmentType: EmploymentType | null;
        workModel: WorkModel | null;
        status: ApplicationStatus;
        coverLetter: string | null;
        appliedAt: Date;
        updatedAt: Date;
    }[];
};
export declare class DashboardService {
    private repo;
    constructor(repo: DashboardRepository);
    getApplicationsOverview(user: JwtPayload): Promise<ApplicationsOverviewResponse>;
}
export {};
