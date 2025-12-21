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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const company_repository_1 = require("./company.repository");
const pagination_util_1 = require("../../common/pagination/pagination.util");
const s3_storage_service_1 = require("../../shared/storage/s3-storage.service");
let CompanyService = class CompanyService {
    repo;
    storage;
    constructor(repo, storage) {
        this.repo = repo;
        this.storage = storage;
    }
    async create(dto) {
        const existing = await this.repo.findByName(dto.name);
        if (existing) {
            throw new common_1.ConflictException("Já existe uma empresa com esse nome.");
        }
        return this.repo.create(dto);
    }
    async update(id, dto) {
        const company = await this.repo.findById(id);
        if (!company) {
            throw new common_1.NotFoundException("Empresa não encontrada.");
        }
        return this.repo.update(id, dto);
    }
    async findById(id) {
        const company = await this.repo.findById(id);
        if (!company) {
            throw new common_1.NotFoundException("Empresa não encontrada.");
        }
        return company;
    }
    async findAll(query) {
        const { page, limit, size, industry, search, sortBy, sortOrder } = query;
        const pagination = {
            skip: (page - 1) * limit,
            take: limit,
        };
        const filters = {};
        if (size)
            filters.size = size;
        if (industry)
            filters.industry = industry;
        if (search) {
            filters.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
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
    async delete(id) {
        const company = await this.repo.findById(id);
        if (!company) {
            throw new common_1.NotFoundException("Empresa não encontrada.");
        }
        if (company.logoUrl) {
            await this.storage.deleteByUrl(company.logoUrl);
        }
        return this.repo.delete(id);
    }
    async uploadLogo(id, file) {
        try {
            if (!file) {
                throw new common_1.BadRequestException("Arquivo de logo é obrigatório.");
            }
            const company = await this.repo.findById(id);
            if (!company) {
                throw new common_1.NotFoundException("Empresa não encontrada.");
            }
            if (company.logoUrl) {
                await this.storage.deleteByUrl(company.logoUrl);
            }
            const { url } = await this.storage.upload(file, `companies/${id}/logo`);
            const updated = await this.repo.update(id, {
                logoUrl: url,
            });
            return updated;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getLogoUrl(id) {
        const company = await this.repo.findById(id);
        if (!company) {
            throw new common_1.NotFoundException("Empresa não encontrada.");
        }
        if (!company.logoUrl) {
            throw new common_1.NotFoundException("Empresa não possui logo cadastrada.");
        }
        return { url: company.logoUrl };
    }
    async removeLogo(id) {
        const company = await this.repo.findById(id);
        if (!company) {
            throw new common_1.NotFoundException("Empresa não encontrada.");
        }
        if (company.logoUrl) {
            await this.storage.deleteByUrl(company.logoUrl);
        }
        return this.repo.update(id, {
            logoUrl: null,
        });
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [company_repository_1.CompanyRepository,
        s3_storage_service_1.S3StorageService])
], CompanyService);
//# sourceMappingURL=company.service.js.map