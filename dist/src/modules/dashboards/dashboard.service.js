"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const dashboard_repository_1 = require("./dashboard.repository");
let DashboardService = class DashboardService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getApplicationsOverview(user) {
        const year = new Date().getFullYear();
        const [statusAgg, lastApps, appsForYear] = await Promise.all([
            this.repo.getStatusCountsForCandidate(user.sub),
            this.repo.getLastApplicationsForCandidate(user.sub, 5),
            this.repo.getApplicationsForCandidateInYear(user.sub, year),
        ]);
        const { total, counts } = statusAgg;
        const totalActive = (counts.PENDING ?? 0) +
            (counts.UNDER_REVIEW ?? 0) +
            (counts.INTERVIEW ?? 0);
        const underReview = counts.UNDER_REVIEW ?? 0;
        const interviews = counts.INTERVIEW ?? 0;
        const newMessages = 0;
        const lastApplications = lastApps.map((app) => ({
            id: app.id,
            jobTitle: app.job.title,
            companyName: app.job.company?.name ?? null,
            companyLogoUrl: app.job.company?.logoUrl ?? null,
            location: app.job.location ?? null,
            employmentType: app.job.employmentType ?? null,
            workModel: app.job.workModel ?? null,
            status: app.status,
            coverLetter: app.coverLetter ?? null,
            appliedAt: app.appliedAt,
            updatedAt: app.updatedAt,
        }));
        const monthlyMap = new Map();
        for (let i = 0; i < 12; i++) {
            monthlyMap.set(i, 0);
        }
        for (const app of appsForYear) {
            const monthIndex = app.appliedAt.getMonth();
            monthlyMap.set(monthIndex, (monthlyMap.get(monthIndex) ?? 0) + 1);
        }
        const monthlyApplications = Array.from(monthlyMap.entries()).map(([monthIndex, count]) => ({
            month: monthIndex + 1,
            total: count,
        }));
        return {
            kpis: {
                totalActive,
                underReview,
                interviews,
                newMessages,
            },
            monthlyApplications,
            lastApplications,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dashboard_repository_1.DashboardRepository])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map