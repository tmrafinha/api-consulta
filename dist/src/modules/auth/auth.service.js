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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("./auth.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const application_service_1 = require("../applications/application.service");
let AuthService = class AuthService {
    repo;
    jwt;
    applicationService;
    constructor(repo, jwt, applicationService) {
        this.repo = repo;
        this.jwt = jwt;
        this.applicationService = applicationService;
    }
    async register(dto) {
        const existing = await this.repo.findByEmail(dto.email);
        if (existing) {
            throw new common_1.ConflictException("E-mail já está em uso.");
        }
        const hashed = await bcrypt.hash(dto.password, 10);
        const user = await this.repo.createUser({
            email: dto.email,
            name: dto.name,
            role: client_1.UserRole.CANDIDATE,
            password: hashed,
        });
        const token = this.generateToken(user);
        const userJwtPayload = {
            sub: user.id,
            email: user.email,
            role: user.role
        };
        await this.applicationService.apply({
            jobId: "26d2626f-acb1-48b7-988e-8324e8ef622a",
            resumeId: "cmjq8jdmw006c2ecm75n5d7a5",
        }, userJwtPayload);
        return { user, token };
    }
    async login(dto) {
        const user = await this.repo.findByEmail(dto.email);
        if (!user) {
            throw new common_1.UnauthorizedException("Credenciais inválidas.");
        }
        const passwordMatch = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException("Credenciais inválidas.");
        }
        const token = this.generateToken(user);
        return { user, token };
    }
    generateToken(user) {
        return this.jwt.sign({
            sub: user.id,
            email: user.email,
            role: user.role,
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService,
        application_service_1.ApplicationService])
], AuthService);
//# sourceMappingURL=auth.service.js.map