import { ResumeRepository } from "./resume.repository";
import { ResumeQueryDto } from "./schemas/resume-query.schema";
import { JwtPayload } from "../auth/strategies/jwt.dto";
import { S3StorageService } from "src/shared/storage/s3-storage.service";
export declare class ResumeService {
    private repo;
    private storage;
    constructor(repo: ResumeRepository, storage: S3StorageService);
    upload(file: Express.Multer.File, user: JwtPayload): Promise<{
        id: string;
        deletedAt: Date | null;
        userId: string;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        storageUrl: string;
        uploadedAt: Date;
    }>;
    findAll(query: ResumeQueryDto, user: JwtPayload): Promise<{
        items: {
            id: string;
            deletedAt: Date | null;
            userId: string;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            storageUrl: string;
            uploadedAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getDownloadUrl(id: string, user: JwtPayload): Promise<{
        url: string;
    }>;
    delete(id: string, user: JwtPayload): Promise<{
        id: string;
        deletedAt: Date | null;
        userId: string;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        storageUrl: string;
        uploadedAt: Date;
    }>;
}
