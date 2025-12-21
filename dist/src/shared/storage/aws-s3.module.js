"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Module = exports.AWS_S3_CLIENT = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
exports.AWS_S3_CLIENT = "AWS_S3_CLIENT";
let AwsS3Module = class AwsS3Module {
};
exports.AwsS3Module = AwsS3Module;
exports.AwsS3Module = AwsS3Module = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        providers: [
            {
                provide: exports.AWS_S3_CLIENT,
                useFactory: (config) => {
                    const region = config.get("AWS_REGION");
                    const bucket = config.get("AWS_S3_BUCKET");
                    const accessKeyId = config.get("AWS_ACCESS_KEY_ID");
                    const secretAccessKey = config.get("AWS_SECRET_ACCESS_KEY");
                    if (!region)
                        throw new Error("AWS_REGION is missing from .env");
                    if (!bucket)
                        throw new Error("AWS_S3_BUCKET is missing from .env");
                    if (!accessKeyId)
                        throw new Error("AWS_ACCESS_KEY_ID is missing from .env");
                    if (!secretAccessKey)
                        throw new Error("AWS_SECRET_ACCESS_KEY is missing from .env");
                    return new client_s3_1.S3Client({
                        region,
                        credentials: {
                            accessKeyId,
                            secretAccessKey,
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
        ],
        exports: [exports.AWS_S3_CLIENT],
    })
], AwsS3Module);
//# sourceMappingURL=aws-s3.module.js.map