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
exports.CompanyRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma/prisma.service");
let CompanyRepository = class CompanyRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.company.create({ data });
    }
    update(id, data) {
        return this.prisma.company.update({
            where: { id },
            data,
        });
    }
    findById(id) {
        return this.prisma.company.findUnique({
            where: { id },
        });
    }
    findByName(name) {
        return this.prisma.company.findFirst({
            where: { name },
        });
    }
    async findAll(params) {
        const { pagination, filters, sortBy, sortOrder } = params;
        const [items, total] = await this.prisma.$transaction([
            this.prisma.company.findMany({
                where: filters,
                skip: pagination.skip,
                take: pagination.take,
                orderBy: {
                    [sortBy]: sortOrder,
                },
            }),
            this.prisma.company.count({ where: filters }),
        ]);
        return { items, total };
    }
    delete(id) {
        return this.prisma.company.delete({
            where: { id },
        });
    }
};
exports.CompanyRepository = CompanyRepository;
exports.CompanyRepository = CompanyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompanyRepository);
//# sourceMappingURL=company.repository.js.map