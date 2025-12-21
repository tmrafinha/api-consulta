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
exports.ResumeService = void 0;
const common_1 = require("@nestjs/common");
const resume_repository_1 = require("./resume.repository");
const pagination_util_1 = require("../../common/pagination/pagination.util");
const s3_storage_service_1 = require("../../shared/storage/s3-storage.service");
let ResumeService = class ResumeService {
    repo;
    storage;
    constructor(repo, storage) {
        this.repo = repo;
        this.storage = storage;
    }
    async upload(file, user) {
        if (!file) {
            throw new common_1.ForbiddenException("Arquivo é obrigatório");
        }
        const { key } = await this.storage.upload(file, `resumes/${user.sub}`);
        const resume = await this.repo.create({
            userId: user.sub,
            filename: file.originalname,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            storageUrl: key,
        });
        return resume;
    }
    async findAll(query, user) {
        const { page, limit, search, sortBy, sortOrder } = query;
        const pagination = {
            skip: (page - 1) * limit,
            take: limit,
        };
        const filters = {
            userId: user.sub,
            deletedAt: null,
        };
        if (search) {
            filters.OR = [
                { originalName: { contains: search, mode: "insensitive" } },
                { filename: { contains: search, mode: "insensitive" } },
            ];
        }
        const { items, total } = await this.repo.findAll({
            pagination,
            filters,
            sortBy,
            sortOrder,
        });
        return (0, pagination_util_1.buildPaginationResponse)(items, total, page, limit);
    }
    async getDownloadUrl(id, user) {
        const resume = await this.repo.findById(id);
        if (!resume || resume.deletedAt) {
            throw new common_1.NotFoundException("Currículo não encontrado.");
        }
        if (resume.userId !== user.sub) {
            throw new common_1.ForbiddenException("Você não tem acesso a este currículo.");
        }
        const url = await this.storage.getSignedUrl(resume.storageUrl);
        return { url };
    }
    async delete(id, user) {
        const resume = await this.repo.findById(id);
        if (!resume || resume.deletedAt) {
            throw new common_1.NotFoundException("Currículo não encontrado.");
        }
        if (resume.userId !== user.sub) {
            throw new common_1.ForbiddenException("Você não tem acesso a este currículo.");
        }
        await this.storage.delete(resume.storageUrl);
        return this.repo.softDelete(id);
    }
};
exports.ResumeService = ResumeService;
exports.ResumeService = ResumeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [resume_repository_1.ResumeRepository,
        s3_storage_service_1.S3StorageService])
], ResumeService);
//# sourceMappingURL=resume.service.js.map