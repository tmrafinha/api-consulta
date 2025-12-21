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
exports.ApplicationService = void 0;
const common_1 = require("@nestjs/common");
const application_repository_1 = require("./application.repository");
const pagination_util_1 = require("../../common/pagination/pagination.util");
let ApplicationService = class ApplicationService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async apply(dto, user) {
        const alreadyApplied = await this.repo.findByCandidateAndJob(user.sub, dto.jobId);
        if (alreadyApplied) {
            throw new common_1.ConflictException('Você já se candidatou a esta vaga.');
        }
        return this.repo.create(dto, user.sub);
    }
    async findAll(query, user) {
        const { page, limit, status, jobId, sortBy, sortOrder } = query;
        const pagination = {
            skip: (page - 1) * limit,
            take: limit,
        };
        const filters = {};
        filters.candidateId = user.sub;
        if (status)
            filters.status = status;
        if (jobId)
            filters.jobId = jobId;
        const { items, total } = await this.repo.findAll({
            pagination,
            filters,
            sortBy,
            sortOrder,
        });
        return (0, pagination_util_1.buildPaginationResponse)(items, total, page, limit);
    }
};
exports.ApplicationService = ApplicationService;
exports.ApplicationService = ApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [application_repository_1.ApplicationRepository])
], ApplicationService);
//# sourceMappingURL=application.service.js.map