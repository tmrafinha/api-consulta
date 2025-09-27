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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationController = void 0;
const common_1 = require("@nestjs/common");
const information_service_1 = require("./information.service");
const base_response_interceptor_1 = require("../../common/interceptors/base-response.interceptor");
let InformationController = class InformationController {
    informationService;
    constructor(informationService) {
        this.informationService = informationService;
    }
    async getData(cpf) {
        return this.informationService.getBasicData(cpf);
    }
};
exports.InformationController = InformationController;
__decorate([
    (0, common_1.Get)('basic'),
    __param(0, (0, common_1.Query)('cpf')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getData", null);
exports.InformationController = InformationController = __decorate([
    (0, common_1.Controller)('information'),
    (0, common_1.UseInterceptors)(base_response_interceptor_1.BaseResponseInterceptor),
    __metadata("design:paramtypes", [information_service_1.InformationService])
], InformationController);
//# sourceMappingURL=information.controller.js.map