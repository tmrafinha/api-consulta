import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { AuditRepository } from './audit.repository';

@Module({
  imports: [PrismaModule],
  providers: [AuditService, AuditRepository],
  exports: [AuditService],
})
export class AuditModule {}
