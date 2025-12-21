import { DashboardService } from './dashboard.service';
import { JwtPayload } from '../auth/strategies/jwt.dto';
export declare class DashboardController {
    private service;
    constructor(service: DashboardService);
    getApplicationsOverview(user: JwtPayload): Promise<{
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
            employmentType: import(".prisma/client").EmploymentType | null;
            workModel: import(".prisma/client").WorkModel | null;
            status: import(".prisma/client").ApplicationStatus;
            coverLetter: string | null;
            appliedAt: Date;
            updatedAt: Date;
        }[];
    }>;
}
