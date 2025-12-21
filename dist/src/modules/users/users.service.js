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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const users_repository_1 = require("./users.repository");
const audit_service_1 = require("../audit/audit.service");
const pagination_util_1 = require("../../common/pagination/pagination.util");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    repository;
    audit;
    constructor(repository, audit) {
        this.repository = repository;
        this.audit = audit;
    }
    async create(dto, actorId) {
        const existing = await this.repository.findByEmail(dto.email);
        if (existing) {
            throw new common_1.ConflictException("Já existe um usuário registrado com este e-mail.");
        }
        try {
            const hashedPassword = await bcrypt.hash(dto.password, 10);
            const created = await this.repository.create({
                email: dto.email,
                name: dto.name,
                password: hashedPassword,
            });
            await this.audit.log(actorId, "User", created.id, client_1.AuditAction.CREATE, dto);
            return created;
        }
        catch (error) {
            throw new common_1.ConflictException("Não foi possível criar o usuário.", error);
        }
    }
    async update(id, dto, actorId) {
        const data = {};
        if (dto.name !== undefined) {
            data.name = dto.name;
        }
        if (dto.password !== undefined) {
            const hashed = await bcrypt.hash(dto.password, 10);
            data.password = hashed;
        }
        const updated = await this.repository.update(id, data);
        return updated;
    }
    async findById(id) {
        return this.repository.findById(id);
    }
    async findAll(query) {
        const { page, limit, search, role, companyId, sortBy, sortOrder } = query;
        const pagination = {
            skip: (page - 1) * limit,
            take: limit,
        };
        const filters = {
            deletedAt: null,
        };
        if (role)
            filters.role = role;
        if (companyId)
            filters.companyId = companyId;
        if (search) {
            filters.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
            ];
        }
        const { items, total } = await this.repository.findAll({
            pagination,
            filters,
            sortBy,
            sortOrder,
        });
        return (0, pagination_util_1.buildPaginationResponse)(items, total, page, limit);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        audit_service_1.AuditService])
], UsersService);
//# sourceMappingURL=users.service.js.map