// src/modules/users/users.service.ts
import { ConflictException, Injectable } from "@nestjs/common";
import { AuditAction, Prisma, User } from "@prisma/client";
import { UsersRepository } from "./users.repository";
import { AuditService } from "../audit/audit.service";
import { CreateUserDto } from "./schemas/create-user.schema";
import { UpdateUserDto } from "./schemas/update-user.schema";
import { UserQueryDto } from "./schemas/user-query.schema";
import { buildPaginationResponse } from "src/common/pagination/pagination.util";
import * as bcrypt from "bcrypt"; // 👈 aqui sim

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UsersRepository,
    private readonly audit: AuditService,
  ) {}

  async create(dto: CreateUserDto, actorId: string): Promise<User> {
    const existing = await this.repository.findByEmail(dto.email);

    if (existing) {
      throw new ConflictException(
        "Já existe um usuário registrado com este e-mail.",
      );
    }

    try {
      // hash na criação também
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      const created = await this.repository.create({
        email: dto.email,
        name: dto.name,
        password: hashedPassword,
      });

      await this.audit.log(
        actorId,
        "User",
        created.id,
        AuditAction.CREATE,
        dto,
      );

      return created;
    } catch (error) {
      throw new ConflictException("Não foi possível criar o usuário.", error);
    }
  }

  async update(id: string, dto: UpdateUserDto, actorId: string): Promise<User> {
    const data: Prisma.UserUpdateInput = {};

    if (dto.name !== undefined) {
      data.name = dto.name;
    }

    if (dto.password !== undefined) {
      const hashed = await bcrypt.hash(dto.password, 10);
      data.password = hashed;
    }

    const updated = await this.repository.update(id, data);

    // se quiser logar depois, é aqui:
    // await this.audit.log(actorId, "User", id, AuditAction.UPDATE, dto);

    return updated; // ✅ continua sendo User, sem briga com o TS
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findById(id);
  }

  async findAll(query: UserQueryDto) {
    const { page, limit, search, role, companyId, sortBy, sortOrder } = query;

    const pagination = {
      skip: (page - 1) * limit,
      take: limit,
    };

    const filters: any = {
      deletedAt: null,
    };

    if (role) filters.role = role;
    if (companyId) filters.companyId = companyId;

    if (search) {
      filters.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    const { items, total } = await this.repository.findAll({
      pagination,
      filters,
      sortBy,
      sortOrder,
    });

    return buildPaginationResponse(items, total, page, limit);
  }
}