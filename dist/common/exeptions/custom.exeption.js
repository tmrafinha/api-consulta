"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomException = void 0;
const common_1 = require("@nestjs/common");
class CustomException extends common_1.HttpException {
    code;
    message;
    errors;
    constructor(code, message, status = common_1.HttpStatus.BAD_REQUEST, errors) {
        super({ message, errors, code }, status);
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
}
exports.CustomException = CustomException;
//# sourceMappingURL=custom.exeption.js.map