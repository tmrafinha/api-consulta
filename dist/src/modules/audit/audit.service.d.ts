import { AuditRepository } from './audit.repository';
import { AuditAction } from '@prisma/client';
export declare class AuditService {
    private repo;
    constructor(repo: AuditRepository);
    log(actorId: string | null, entity: string, entityId: string, action: AuditAction, metadata?: Record<string, any>): Promise<{
        id: string;
        createdAt: Date;
        actorId: string | null;
        entity: string;
        entityId: string;
        action: import(".prisma/client").$Enums.AuditAction;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
