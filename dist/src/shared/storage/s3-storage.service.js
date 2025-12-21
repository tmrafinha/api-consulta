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
exports.S3StorageService = void 0;
const common_1 = require("@nestjs/common");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const crypto_1 = require("crypto");
const aws_s3_client_1 = require("./aws-s3.client");
const config_1 = require("@nestjs/config");
let S3StorageService = class S3StorageService {
    s3;
    config;
    constructor(s3, config) {
        this.s3 = s3;
        this.config = config;
    }
    get bucket() {
        const bucket = this.config.get("AWS_S3_BUCKET");
        if (!bucket) {
            throw new Error("AWS_S3_BUCKET não definido no .env");
        }
        return bucket;
    }
    buildPublicUrl(key) {
        const customBase = this.config.get("AWS_S3_PUBLIC_BASE_URL");
        if (customBase) {
            return `${customBase}/${key}`;
        }
        return `https://${this.bucket}.s3.amazonaws.com/${key}`;
    }
    extractKeyFromUrl(url) {
        const customBase = this.config.get("AWS_S3_PUBLIC_BASE_URL");
        if (customBase && url.startsWith(customBase)) {
            return url.replace(customBase + "/", "");
        }
        const bucketBase = `https://${this.bucket}.s3.amazonaws.com/`;
        if (url.startsWith(bucketBase)) {
            return url.replace(bucketBase, "");
        }
        const parsed = new URL(url);
        return parsed.pathname.replace(/^\/+/, "");
    }
    async upload(file, prefix) {
        const key = `${prefix}/${Date.now()}-${(0, crypto_1.randomUUID)()}-${file.originalname}`;
        try {
            await this.s3.send(new client_s3_1.PutObjectCommand({
                Bucket: this.bucket,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
            }));
        }
        catch (error) {
            console.error("S3 Upload Error:", error);
            throw new common_1.InternalServerErrorException("Erro ao enviar arquivo ao S3");
        }
        const url = this.buildPublicUrl(key);
        return { key, url };
    }
    async delete(key) {
        try {
            await this.s3.send(new client_s3_1.DeleteObjectCommand({
                Bucket: this.bucket,
                Key: key,
            }));
        }
        catch (error) {
            console.error("S3 Delete Error:", error);
            throw new common_1.InternalServerErrorException("Erro ao remover arquivo do S3");
        }
    }
    async deleteByUrl(url) {
        const key = this.extractKeyFromUrl(url);
        await this.delete(key);
    }
    async getSignedUrl(key, expiresInSeconds = 300) {
        try {
            const command = new client_s3_1.GetObjectCommand({
                Bucket: this.bucket,
                Key: key,
            });
            return await (0, s3_request_presigner_1.getSignedUrl)(this.s3, command, {
                expiresIn: expiresInSeconds,
            });
        }
        catch (error) {
            console.error("S3 Signed URL Error:", error);
            throw new common_1.InternalServerErrorException("Erro ao gerar URL de download do S3");
        }
    }
};
exports.S3StorageService = S3StorageService;
exports.S3StorageService = S3StorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(aws_s3_client_1.AWS_S3_CLIENT)),
    __metadata("design:paramtypes", [client_s3_1.S3Client,
        config_1.ConfigService])
], S3StorageService);
//# sourceMappingURL=s3-storage.service.js.map