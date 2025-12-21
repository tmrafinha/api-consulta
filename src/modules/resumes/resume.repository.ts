import { Injectable } from "@nestjs/common";
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

@Injectable()
export class ResumeRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateResumeData): Promise<Resume> {
    const { userId, ...rest } = data;

    const prismaData: Prisma.ResumeCreateInput = {
      ...rest,
      user: {
        connect: { id: userId },
      },
    };

    return this.prisma.resume.create({ data: prismaData });
  }

  async findById(id: string): Promise<Resume | null> {
    return this.prisma.resume.findUnique({
      where: { id },
    });
  }

  async findAll(params: {
    pagination: { skip: number; take: number };
    filters: Prisma.ResumeWhereInput;
    sortBy: string;
    sortOrder: "asc" | "desc";
  }) {
    const { pagination, filters, sortBy, sortOrder } = params;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.resume.findMany({
        where: filters,
        skip: pagination.skip,
        take: pagination.take,
        orderBy: { [sortBy]: sortOrder },
      }),
      this.prisma.resume.count({ where: filters }),
    ]);

    return { items, total };
  }

  async softDelete(id: string): Promise<Resume> {
    return this.prisma.resume.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}