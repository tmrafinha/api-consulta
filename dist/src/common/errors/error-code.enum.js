"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AUTH_UNAUTHORIZED"] = "AUTH_UNAUTHORIZED";
    ErrorCode["AUTH_FORBIDDEN"] = "AUTH_FORBIDDEN";
    ErrorCode["USER_ALREADY_EXISTS"] = "USER_ALREADY_EXISTS";
    ErrorCode["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ErrorCode["BUSINESS_ERROR"] = "BUSINESS_ERROR";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["DB_CONFLICT"] = "DB_CONFLICT";
    ErrorCode["DB_NOT_FOUND"] = "DB_NOT_FOUND";
    ErrorCode["DB_FOREIGN_KEY"] = "DB_FOREIGN_KEY";
    ErrorCode["DB_ERROR"] = "DB_ERROR";
    ErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=error-code.enum.js.map