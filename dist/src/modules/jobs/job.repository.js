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
exports.JobRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma/prisma.service");
let JobRepository = class JobRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const { companyId, ...rest } = dto;
        const data = {
            ...rest,
            company: {
                connect: { id: companyId },
            },
        };
        return this.prisma.job.create({ data });
    }
    async update(id, data) {
        return this.prisma.job.update({ where: { id }, data });
    }
    async findById(id) {
        return this.prisma.job.findUnique({
            where: { id },
            include: { company: true }
        });
    }
    async findBySlug(slug) {
        return this.prisma.job.findUnique({
            where: { slug }
        });
    }
    async delete(id) {
        return this.prisma.job.delete({ where: { id } });
    }
    async findAll(params) {
        const { pagination, filters, sortBy, sortOrder } = params;
        const [items, total] = await this.prisma.$transaction([
            this.prisma.job.findMany({
                where: filters,
                skip: pagination.skip,
                take: pagination.take,
                orderBy: { [sortBy]: sortOrder },
                include: {
                    company: true,
                },
            }),
            this.prisma.job.count({ where: filters }),
        ]);
        return { items, total };
    }
    async findAppliedJobIdsForCandidate(candidateId, jobIds) {
        if (!jobIds.length)
            return [];
        const applications = await this.prisma.application.findMany({
            where: {
                candidateId,
                jobId: { in: jobIds },
                deletedAt: null,
            },
            select: { jobId: true },
        });
        return applications.map(app => app.jobId);
    }
};
exports.JobRepository = JobRepository;
exports.JobRepository = JobRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JobRepository);
//# sourceMappingURL=job.repository.js.map