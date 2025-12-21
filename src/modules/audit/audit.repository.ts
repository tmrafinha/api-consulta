import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/prisma/prisma.service";
import { AuditAction, Prisma, AuditLog } from "@prisma/client";

@Injectable()
export class AuditRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AuditLogCreateInput): Promise<AuditLog> {
    return this.prisma.auditLog.create({ data });
  }

  async findAllByEntity(entity: string): Promise<AuditLog[]> {
    return this.prisma.auditLog.findMany({
      where: { entity },
      orderBy: { createdAt: "desc" },
    });
  }

  async findByActor(actorId: string): Promise<AuditLog[]> {
    return this.prisma.auditLog.findMany({
      where: { actorId },
      orderBy: { createdAt: "desc" },
    });
  }
}
