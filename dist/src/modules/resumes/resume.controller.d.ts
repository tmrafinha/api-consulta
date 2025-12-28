import { ResumeService } from "./resume.service";
import { JwtPayload } from "../auth/strategies/jwt.dto";
import { ResumeQueryDto } from "./schemas/resume-query.schema";
export declare class ResumeController {
    private service;
    constructor(service: ResumeService);
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
    getAll(query: ResumeQueryDto, user: JwtPayload): Promise<{
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
