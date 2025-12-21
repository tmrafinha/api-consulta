import { S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
export declare class S3StorageService {
    private readonly s3;
    private readonly config;
    constructor(s3: S3Client, config: ConfigService);
    private get bucket();
    private buildPublicUrl;
    private extractKeyFromUrl;
    upload(file: Express.Multer.File, prefix: string): Promise<{
        key: string;
        url: string;
    }>;
    delete(key: string): Promise<void>;
    deleteByUrl(url: string): Promise<void>;
    getSignedUrl(key: string, expiresInSeconds?: number): Promise<string>;
}
