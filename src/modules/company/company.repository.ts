import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/prisma/prisma.service";
import { Prisma, Company } from "@prisma/client";

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CompanyCreateInput): Promise<Company> {
    return this.prisma.company.create({ data });
  }

  update(id: string, data: Prisma.CompanyUpdateInput): Promise<Company> {
    return this.prisma.company.update({
      where: { id },
      data,
    });
  }

  findById(id: string): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { id },
    });
  }

  findByName(name: string): Promise<Company | null> {
    return this.prisma.company.findFirst({
      where: { name },
    });
  }

  async findAll(params: {
  pagination: { skip: number; take: number };
  filters: any;
  sortBy: string;
  sortOrder: "asc" | "desc";
}) {
  const { pagination, filters, sortBy, sortOrder } = params;

  const [items, total] = await this.prisma.$transaction([
    this.prisma.company.findMany({
      where: filters,
      skip: pagination.skip,
      take: pagination.take,
      orderBy: {
        [sortBy]: sortOrder,
      },
    }),

    this.prisma.company.count({ where: filters }),
  ]);

  return { items, total };
}


  delete(id: string): Promise<Company> {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}
