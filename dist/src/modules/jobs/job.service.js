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
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const job_repository_1 = require("./job.repository");
const pagination_util_1 = require("../../common/pagination/pagination.util");
let JobService = class JobService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const jobWithSameSlug = await this.repo.findBySlug(dto.slug);
        if (jobWithSameSlug)
            throw new common_1.ConflictException('Slug já existe');
        return this.repo.create(dto);
    }
    async update(id, dto) {
        const job = await this.repo.findById(id);
        if (!job)
            throw new common_1.NotFoundException('Vaga não encontrada.');
        if (dto.slug && dto.slug !== job.slug) {
            const exists = await this.repo.findBySlug(dto.slug);
            if (exists) {
                throw new common_1.ConflictException('Slug já está em uso.');
            }
        }
        return this.repo.update(id, dto);
    }
    async findById(id, user) {
        const job = await this.repo.findById(id);
        if (!job)
            throw new common_1.NotFoundException('Vaga não encontrada.');
        if (!user)
            return job;
        const [appliedIds] = await Promise.all([
            this.repo.findAppliedJobIdsForCandidate(user.sub, [job.id]),
        ]);
        const appliedByCurrentUser = appliedIds.includes(job.id);
        return { ...job, appliedByCurrentUser };
    }
    async findAll(query, user) {
        const { page, limit, search, companyId, workModel, employmentType, location, minSalary, maxSalary, sortBy, sortOrder, } = query;
        const pagination = {
            skip: (page - 1) * limit,
            take: limit,
        };
        const filters = { isActive: true };
        if (companyId)
            filters.companyId = companyId;
        if (workModel)
            filters.workModel = workModel;
        if (employmentType)
            filters.employmentType = employmentType;
        if (location)
            filters.location = { contains: location, mode: 'insensitive' };
        if (minSalary)
            filters.salaryMin = { gte: minSalary };
        if (maxSalary)
            filters.salaryMax = { lte: maxSalary };
        if (search) {
            filters.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
                { requirementsMust: { has: search } },
                { techStack: { has: search } },
            ];
        }
        const { items, total } = await this.repo.findAll({
            pagination,
            filters,
            sortBy,
            sortOrder,
        });
        if (!user) {
            return (0, pagination_util_1.buildPaginationResponse)(items, total, page, limit);
        }
        const jobIds = items.map(job => job.id);
        const appliedJobIds = await this.repo.findAppliedJobIdsForCandidate(user.sub, jobIds);
        const appliedSet = new Set(appliedJobIds);
        const itemsWithApplied = items.map(job => ({
            ...job,
            appliedByCurrentUser: appliedSet.has(job.id),
        }));
        return (0, pagination_util_1.buildPaginationResponse)(itemsWithApplied, total, page, limit);
    }
    async delete(id) {
        const job = await this.repo.findById(id);
        if (!job)
            throw new common_1.NotFoundException('Vaga não encontrada.');
        return this.repo.delete(id);
    }
};
exports.JobService = JobService;
exports.JobService = JobService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [job_repository_1.JobRepository])
], JobService);
//# sourceMappingURL=job.service.js.map