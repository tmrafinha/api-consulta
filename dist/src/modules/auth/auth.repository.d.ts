import { PrismaService } from "src/config/prisma/prisma.service";
import { Prisma, User } from "@prisma/client";
export declare class AuthRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<User | null>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
}
