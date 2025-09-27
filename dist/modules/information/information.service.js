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
exports.InformationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const custom_exeption_1 = require("../../common/exeptions/custom.exeption");
const error_code_enum_1 = require("../../shared/enums/error-code.enum");
const error_messages_1 = require("../../shared/constants/error-messages");
const config_1 = require("@nestjs/config");
let InformationService = class InformationService {
    httpService;
    configService;
    BASE_URL = 'https://checkdata.vip/api/consultas';
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    async getBasicData(cpf) {
        try {
            const token = this.configService.get('CHECKDATA_TOKEN');
            const url = `${this.BASE_URL}/cpf_basico?query=${cpf}&token=${token}`;
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        }
        catch (error) {
            throw new custom_exeption_1.CustomException(error_code_enum_1.ErrorCode.EXTERNAL_API_ERROR, error_messages_1.ErrorMessages[error_code_enum_1.ErrorCode.EXTERNAL_API_ERROR] ??
                'Erro ao consultar serviço externo', common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
exports.InformationService = InformationService;
exports.InformationService = InformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], InformationService);
//# sourceMappingURL=information.service.js.map