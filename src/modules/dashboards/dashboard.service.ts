import { Injectable } from '@nestjs/common'
import {
  ApplicationStatus,
  EmploymentType,
  WorkModel,
} from '@prisma/client'
import { DashboardRepository } from './dashboard.repository'
import { JwtPayload } from '../auth/strategies/jwt.dto'

type ApplicationsOverviewResponse = {
  kpis: {
    totalActive: number
    underReview: number
    interviews: number
    newMessages: number
  }
  monthlyApplications: {
    month: number
    total: number
  }[]
  lastApplications: {
    id: string
    jobTitle: string
    companyName: string | null
    companyLogoUrl: string | null
    location: string | null
    employmentType: EmploymentType | null
    workModel: WorkModel | null
    status: ApplicationStatus
    coverLetter: string | null
    appliedAt: Date
    updatedAt: Date
  }[]
}

@Injectable()
export class DashboardService {
  constructor(private repo: DashboardRepository) {}

  async getApplicationsOverview(user: JwtPayload): Promise<ApplicationsOverviewResponse> {
    const year = new Date().getFullYear()

    const [statusAgg, lastApps, appsForYear] = await Promise.all([
      this.repo.getStatusCountsForCandidate(user.sub),
      this.repo.getLastApplicationsForCandidate(user.sub, 5),
      this.repo.getApplicationsForCandidateInYear(user.sub, year),
    ])

    const { total, counts } = statusAgg

    // "Ativas" = tudo que não é APPROVED / REJECTED / WITHDRAWN
    const totalActive =
      (counts.PENDING ?? 0) +
      (counts.UNDER_REVIEW ?? 0) +
      (counts.INTERVIEW ?? 0)

    const underReview = counts.UNDER_REVIEW ?? 0
    const interviews = counts.INTERVIEW ?? 0

    // Por enquanto mock; quando tiver módulo de mensagens, você troca essa lógica
    const newMessages = 0

    const lastApplications = lastApps.map((app) => ({
      id: app.id,
      jobTitle: app.job.title,
      companyName: app.job.company?.name ?? null,
      companyLogoUrl: app.job.company?.logoUrl ?? null,
      location: app.job.location ?? null,
      employmentType: app.job.employmentType ?? null,
      workModel: app.job.workModel ?? null,
      status: app.status,
      coverLetter: app.coverLetter ?? null,
      appliedAt: app.appliedAt,
      updatedAt: app.updatedAt,
    }))

    const monthlyMap = new Map<number, number>()
    for (let i = 0; i < 12; i++) {
      monthlyMap.set(i, 0)
    }

    for (const app of appsForYear) {
      const monthIndex = app.appliedAt.getMonth() // 0-11
      monthlyMap.set(monthIndex, (monthlyMap.get(monthIndex) ?? 0) + 1)
    }

    const monthlyApplications = Array.from(monthlyMap.entries()).map(
      ([monthIndex, count]) => ({
        month: monthIndex + 1,
        total: count,
      }),
    )

    return {
      kpis: {
        totalActive,
        underReview,
        interviews,
        newMessages,
      },
      monthlyApplications,
      lastApplications,
    }
  }
}