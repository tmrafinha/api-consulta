// application.repository.ts
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CreateApplicationDto } from './schemas/create-application.schema'

// Tipo com os relacionamentos que a gente quer sempre retornar
type ApplicationWithRelations = Prisma.ApplicationGetPayload<{
  include: {
    job: {
      include: {
        company: true
      }
    }
    candidate: true
    resume: true
  }
}>

@Injectable()
export class ApplicationRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    dto: CreateApplicationDto,
    candidateId: string,
  ): Promise<ApplicationWithRelations> {
    const { jobId, resumeId, coverLetter } = dto

    const data: Prisma.ApplicationCreateInput = {
      coverLetter: coverLetter ?? null,
      candidate: { connect: { id: candidateId } },
      job: { connect: { id: jobId } },
      resume: { connect: { id: resumeId } },
    }

    // 🔥 Já retorna com job + company + candidate + resume
    return this.prisma.application.create({
      data,
      include: {
        job: {
          include: {
            company: true,
          },
        },
        candidate: true,
        resume: true,
      },
    })
  }

  async findByCandidateAndJob(candidateId: string, jobId: string) {
    return this.prisma.application.findUnique({
      where: { candidateId_jobId: { candidateId, jobId } },
      include: {
        job: {
          include: {
            company: true,
          },
        },
        candidate: true,
        resume: true,
      },
    })
  }

  async findById(id: string) {
    return this.prisma.application.findUnique({
      where: { id },
      include: {
        job: {
          include: {
            company: true,
          },
        },
        candidate: true,
        resume: true,
      },
    })
  }

  async findAll(params: {
    pagination: { skip: number; take: number }
    filters: Prisma.ApplicationWhereInput
    sortBy: string
    sortOrder: 'asc' | 'desc'
  }) {
    try {
      const { pagination, filters, sortBy, sortOrder } = params

      const [items, total] = await this.prisma.$transaction([
        this.prisma.application.findMany({
          where: filters,
          skip: pagination.skip,
          take: pagination.take,
          orderBy: { [sortBy]: sortOrder },
          include: {
            job: {
              include: {
                company: true, // 👈 AQUI entra a company
              },
            },
            candidate: true,
            resume: true,
          },
        }),
        this.prisma.application.count({ where: filters }),
      ])

      return { items, total }
    } catch (e) {
      console.error('🔥 PRISMA ERROR FINDALL APPLICATION:', e)
      throw e
    }
  }
}