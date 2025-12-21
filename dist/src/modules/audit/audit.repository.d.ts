import { PrismaService } from "src/config/prisma/prisma.service";
import { Prisma, AuditLog } from "@prisma/client";
export declare class AuditRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.AuditLogCreateInput): Promise<AuditLog>;
    findAllByEntity(entity: string): Promise<AuditLog[]>;
    findByActor(actorId: string): Promise<AuditLog[]>;
}
