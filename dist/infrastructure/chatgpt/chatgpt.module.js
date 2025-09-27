"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGptModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const chatgpt_config_1 = require("./config/chatgpt.config");
const chatgpt_service_1 = require("./chatgpt.service");
let ChatGptModule = class ChatGptModule {
};
exports.ChatGptModule = ChatGptModule;
exports.ChatGptModule = ChatGptModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forFeature(chatgpt_config_1.default),
            axios_1.HttpModule.registerAsync({
                imports: [config_1.ConfigModule.forFeature(chatgpt_config_1.default)],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const config = configService.get('chatgpt');
                    return {
                        baseURL: config.baseUrl,
                        timeout: config.timeoutMs,
                        headers: {
                            Authorization: `Bearer ${config.apiKey}`,
                            'Content-Type': 'application/json',
                        },
                    };
                },
            }),
        ],
        providers: [chatgpt_service_1.ChatGptService],
        exports: [chatgpt_service_1.ChatGptService],
    })
], ChatGptModule);
//# sourceMappingURL=chatgpt.module.js.map