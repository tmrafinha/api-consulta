import { PrismaService } from "src/config/prisma/prisma.service";
import { Prisma, Resume } from "@prisma/client";
interface CreateResumeData {
    userId: string;
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
    storageUrl: string;
}
export declare class ResumeRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateResumeData): Promise<Resume>;
    findById(id: string): Promise<Resume | null>;
    findAll(params: {
        pagination: {
            skip: number;
            take: number;
        };
        filters: Prisma.ResumeWhereInput;
        sortBy: string;
        sortOrder: "asc" | "desc";
    }): Promise<{
        items: {
            id: string;
            deletedAt: Date | null;
            size: number;
            userId: string;
            filename: string;
            originalName: string;
            mimeType: string;
            storageUrl: string;
            uploadedAt: Date;
        }[];
        total: number;
    }>;
    softDelete(id: string): Promise<Resume>;
}
export {};
