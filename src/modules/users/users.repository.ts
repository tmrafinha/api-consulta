import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/config/prisma/prisma.service";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll(params: {
    pagination: { skip: number; take: number };
    filters: Prisma.UserWhereInput;
    sortBy: string;
    sortOrder: "asc" | "desc";
  }): Promise<{ items: User[]; total: number }> {
    const { pagination, filters, sortBy, sortOrder } = params;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where: filters,
        skip: pagination.skip,
        take: pagination.take,
        orderBy: { [sortBy]: sortOrder },
      }),
      this.prisma.user.count({ where: filters }),
    ]);

    return { items, total };
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async softDelete(id: string): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}