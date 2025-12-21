import { Injectable } from '@nestjs/common';
import { AuditRepository } from './audit.repository';
import { AuditAction } from '@prisma/client';

@Injectable()
export class AuditService {
  constructor(private repo: AuditRepository) {}

  async log(
    actorId: string | null,
    entity: string,
    entityId: string,
    action: AuditAction,
    metadata?: Record<string, any>
  ) {
    return this.repo.create({
      actor: actorId ? { connect: { id: actorId } } : undefined,
      entity,
      entityId,
      action,
      metadata,
    });
  }
}
