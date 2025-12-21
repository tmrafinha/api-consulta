import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/config/prisma/prisma.service";
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(params: {
        pagination: {
            skip: number;
            take: number;
        };
        filters: Prisma.UserWhereInput;
        sortBy: string;
        sortOrder: "asc" | "desc";
    }): Promise<{
        items: User[];
        total: number;
    }>;
    delete(id: string): Promise<User>;
    softDelete(id: string): Promise<User>;
}
