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
exports.RegisterSwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegisterSwaggerDto {
    name;
    email;
    password;
}
exports.RegisterSwaggerDto = RegisterSwaggerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nome do usuário",
        example: "Rafael Moreira",
    }),
    __metadata("design:type", String)
], RegisterSwaggerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "E-mail do usuário",
        example: "rafael@example.com",
    }),
    __metadata("design:type", String)
], RegisterSwaggerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Senha (mínimo 6 caracteres)",
        example: "minhaSenha123",
        minLength: 6,
    }),
    __metadata("design:type", String)
], RegisterSwaggerDto.prototype, "password", void 0);
//# sourceMappingURL=register.swagger.dto.js.map