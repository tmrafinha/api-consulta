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
exports.DashboardRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma/prisma.service");
let DashboardRepository = class DashboardRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStatusCountsForCandidate(candidateId) {
        const grouped = await this.prisma.application.groupBy({
            by: ['status'],
            where: {
                candidateId,
                deletedAt: null,
            },
            _count: { _all: true },
        });
        const base = {
            PENDING: 0,
            UNDER_REVIEW: 0,
            INTERVIEW: 0,
            APPROVED: 0,
            REJECTED: 0,
            WITHDRAWN: 0,
        };
        let total = 0;
        for (const row of grouped) {
            const status = row.status;
            const count = row._count._all;
            base[status] = count;
            total += count;
        }
        return { total, counts: base };
    }
    async getLastApplicationsForCandidate(candidateId, limit = 5) {
        return this.prisma.application.findMany({
            where: {
                candidateId,
                deletedAt: null,
            },
            orderBy: {
                appliedAt: 'desc',
            },
            take: limit,
            include: {
                job: {
                    include: {
                        company: true,
                    },
                },
            },
        });
    }
    async getApplicationsForCandidateInYear(candidateId, year) {
        const start = new Date(year, 0, 1);
        const end = new Date(year + 1, 0, 1);
        return this.prisma.application.findMany({
            where: {
                candidateId,
                deletedAt: null,
                appliedAt: {
                    gte: start,
                    lt: end,
                },
            },
            select: {
                appliedAt: true,
                status: true,
            },
        });
    }
};
exports.DashboardRepository = DashboardRepository;
exports.DashboardRepository = DashboardRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardRepository);
//# sourceMappingURL=dashboard.repository.js.map