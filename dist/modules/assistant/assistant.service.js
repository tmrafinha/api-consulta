"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantService = void 0;
const common_1 = require("@nestjs/common");
const custom_exeption_1 = require("../../common/exeptions/custom.exeption");
const error_code_enum_1 = require("../../shared/enums/error-code.enum");
const error_messages_1 = require("../../shared/constants/error-messages");
const common_2 = require("@nestjs/common");
let AssistantService = class AssistantService {
    async handleMessage(dto) {
        const promptValido = dto.message && dto.message.length >= 5;
        if (!promptValido) {
            throw new custom_exeption_1.CustomException(error_code_enum_1.ErrorCode.INVALID_PROMPT, error_messages_1.ErrorMessages[error_code_enum_1.ErrorCode.INVALID_PROMPT], common_2.HttpStatus.BAD_REQUEST);
        }
        return {
            response: `Você disse: ${dto.message}`,
            tokensUsed: 10,
            model: 'gpt-4',
        };
    }
};
exports.AssistantService = AssistantService;
exports.AssistantService = AssistantService = __decorate([
    (0, common_1.Injectable)()
], AssistantService);
//# sourceMappingURL=assistant.service.js.map