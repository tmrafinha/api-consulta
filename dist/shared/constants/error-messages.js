"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = void 0;
const error_code_enum_1 = require("../enums/error-code.enum");
exports.ErrorMessages = {
    [error_code_enum_1.ErrorCode.INVALID_PROMPT]: 'O prompt enviado é inválido.',
    [error_code_enum_1.ErrorCode.OPENAI_ERROR]: 'Erro ao comunicar com o modelo de IA.',
    [error_code_enum_1.ErrorCode.USER_NOT_FOUND]: 'Usuário não encontrado.',
    [error_code_enum_1.ErrorCode.RATE_LIMIT]: 'Você atingiu o limite de uso.',
    [error_code_enum_1.ErrorCode.INTERNAL_ERROR]: 'Erro interno inesperado.',
    [error_code_enum_1.ErrorCode.EXTERNAL_API_ERROR]: '1231asddsa'
};
//# sourceMappingURL=error-messages.js.map