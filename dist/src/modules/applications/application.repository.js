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
exports.ApplicationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma/prisma.service");
let ApplicationRepository = class ApplicationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, candidateId) {
        const { jobId, resumeId, coverLetter } = dto;
        const data = {
            coverLetter: coverLetter ?? null,
            candidate: { connect: { id: candidateId } },
            job: { connect: { id: jobId } },
            resume: { connect: { id: resumeId } },
        };
        return this.prisma.application.create({
            data,
            include: {
                job: {
                    include: {
                        company: true,
                    },
                },
                candidate: true,
                resume: true,
            },
        });
    }
    async findByCandidateAndJob(candidateId, jobId) {
        return this.prisma.application.findUnique({
            where: { candidateId_jobId: { candidateId, jobId } },
            include: {
                job: {
                    include: {
                        company: true,
                    },
                },
                candidate: true,
                resume: true,
            },
        });
    }
    async findById(id) {
        return this.prisma.application.findUnique({
            where: { id },
            include: {
                job: {
                    include: {
                        company: true,
                    },
                },
                candidate: true,
                resume: true,
            },
        });
    }
    async findAll(params) {
        try {
            const { pagination, filters, sortBy, sortOrder } = params;
            const [items, total] = await this.prisma.$transaction([
                this.prisma.application.findMany({
                    where: filters,
                    skip: pagination.skip,
                    take: pagination.take,
                    orderBy: { [sortBy]: sortOrder },
                    include: {
                        job: {
                            include: {
                                company: true,
                            },
                        },
                        candidate: true,
                        resume: true,
                    },
                }),
                this.prisma.application.count({ where: filters }),
            ]);
            return { items, total };
        }
        catch (e) {
            console.error('🔥 PRISMA ERROR FINDALL APPLICATION:', e);
            throw e;
        }
    }
};
exports.ApplicationRepository = ApplicationRepository;
exports.ApplicationRepository = ApplicationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApplicationRepository);
//# sourceMappingURL=application.repository.js.map