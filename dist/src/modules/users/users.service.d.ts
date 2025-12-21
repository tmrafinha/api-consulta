import { User } from "@prisma/client";
import { UsersRepository } from "./users.repository";
import { AuditService } from "../audit/audit.service";
import { CreateUserDto } from "./schemas/create-user.schema";
import { UpdateUserDto } from "./schemas/update-user.schema";
import { UserQueryDto } from "./schemas/user-query.schema";
export declare class UsersService {
    private readonly repository;
    private readonly audit;
    constructor(repository: UsersRepository, audit: AuditService);
    create(dto: CreateUserDto, actorId: string): Promise<User>;
    update(id: string, dto: UpdateUserDto, actorId: string): Promise<User>;
    findById(id: string): Promise<User | null>;
    findAll(query: UserQueryDto): Promise<{
        items: {
            name: string;
            id: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            companyId: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
