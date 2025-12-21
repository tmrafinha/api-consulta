"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinoConfig = void 0;
exports.pinoConfig = {
    pinoHttp: {
        level: process.env.NODE_ENV === "production" ? "info" : "debug",
        transport: process.env.NODE_ENV !== "production"
            ? {
                target: "pino-pretty",
                options: {
                    colorize: true,
                    singleLine: false,
                    translateTime: "SYS:standard",
                },
            }
            : undefined,
        serializers: {
            req(req) {
                return {
                    id: req.id,
                    method: req.method,
                    url: req.url,
                    params: req.params,
                    query: req.query,
                    body: process.env.NODE_ENV !== "production" ? req.body : undefined,
                };
            },
            res(res) {
                return {
                    statusCode: res.statusCode,
                };
            },
        },
        genReqId(req) {
            return req.headers["x-request-id"] || crypto.randomUUID();
        },
        quietReqLogger: false,
    },
};
//# sourceMappingURL=pino.config.js.map