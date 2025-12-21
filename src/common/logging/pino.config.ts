// src/common/logging/pino.config.ts
import type { Options as PinoHttpOptions } from "pino-http";

export const pinoConfig: { pinoHttp: PinoHttpOptions } = {
  pinoHttp: {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",

    // Dev: logs bonitos / Prod: JSON estruturado
    transport:
      process.env.NODE_ENV !== "production"
        ? {
            target: "pino-pretty",
            options: {
              colorize: true,
              singleLine: false,
              translateTime: "SYS:standard",
            },
          }
        : undefined,

    // 🔍 Log detalhado, mas seguro
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url,
          params: req.params,
          query: req.query,
          // evite logar bodies grandes em prod
          body:
            process.env.NODE_ENV !== "production" ? req.body : undefined,
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },

    // Corrrelation ID automático
    genReqId(req) {
      return req.headers["x-request-id"] || crypto.randomUUID();
    },

    quietReqLogger: false,
  },
};
