import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma/prisma.service'
import {
  ApplicationStatus,
  EmploymentType,
  WorkModel,
} from '@prisma/client'

type StatusCounts = {
  total: number
  counts: Record<ApplicationStatus, number>
}

@Injectable()
export class DashboardRepository {
  constructor(private prisma: PrismaService) {}

  async getStatusCountsForCandidate(candidateId: string): Promise<StatusCounts> {
    const grouped = await this.prisma.application.groupBy({
      by: ['status'],
      where: {
        candidateId,
        deletedAt: null,
      },
      _count: { _all: true },
    })

    const base: Record<ApplicationStatus, number> = {
      PENDING: 0,
      UNDER_REVIEW: 0,
      INTERVIEW: 0,
      APPROVED: 0,
      REJECTED: 0,
      WITHDRAWN: 0,
    }

    let total = 0

    for (const row of grouped) {
      const status = row.status as ApplicationStatus
      const count = row._count._all
      base[status] = count
      total += count
    }

    return { total, counts: base }
  }

  async getLastApplicationsForCandidate(candidateId: string, limit = 5) {
    return this.prisma.application.findMany({
      where: {
        candidateId,
        deletedAt: null,
      },
      orderBy: {
        appliedAt: 'desc',
      },
      take: limit,
      include: {
        job: {
          include: {
            company: true,
          },
        },
      },
    })
  }

  /**
   * Todas as candidaturas do ano atual, pra agrupar por mês.
   */
  async getApplicationsForCandidateInYear(
    candidateId: string,
    year: number,
  ) {
    const start = new Date(year, 0, 1)
    const end = new Date(year + 1, 0, 1)

    return this.prisma.application.findMany({
      where: {
        candidateId,
        deletedAt: null,
        appliedAt: {
          gte: start,
          lt: end,
        },
      },
      select: {
        appliedAt: true,
        status: true,
      },
    })
  }
}